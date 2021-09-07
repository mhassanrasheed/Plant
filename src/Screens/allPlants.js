import React, {useEffect, useState, useMemo, useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {listUserPlants, listPlants} from '../graphql/queries';
import {createUserPlants} from '../graphql/mutations';
import {onDeleteUserPlants} from '../graphql/subscriptions';
import {UserContext} from '../../App';
import ListPlant from '../components/listPlant';

/**
 * Displays a list of plant collection in the database
 * Except for the plants which are in user's collection
 * @export
 * @param {*} {navigation, route}
 * @return {*} View showing all the plants available for selection
 */
export default function allPlants({navigation, route}) {
  const [notUserPlants, setNotUserPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useContext(UserContext);
  const [userId, setUserId] = useState(user?.sub);
  const [number, setNumber] = useState(0);

  /**
   * Listens for a real time changes in User Plants table
   * If a User deletes a plant then it refreshes the page
   * @return {*} Updated plant list
   */
  useMemo(() => {
    const subscription = API.graphql(
      graphqlOperation(onDeleteUserPlants),
    ).subscribe(msg => {
      if (msg.value.data.onDeleteUserPlants.userID == userId) {
        setNumber(old => old + 1);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useMemo(() => {
    try {
      const fetchNotUserPlant = async () => {
        let fetchedUserPlants = await API.graphql(
          graphqlOperation(listUserPlants, {
            filter: {userID: {eq: userId}},
          }),
        );
        let allPlant = await API.graphql(graphqlOperation(listPlants));
        let userPlantIds = new Set(
          fetchedUserPlants.data.listUserPlants.items.map(
            Plant => Plant.plantID,
          ),
        );
        let notUserPlants = allPlant.data.listPlants.items.filter(
          ({id}) => !userPlantIds.has(id),
        );
        setNotUserPlants(notUserPlants);
        if (loading) setLoading(false);
      };
      fetchNotUserPlant();
    } catch (error) {}
  }, [number]);

  const addPlant = async plantId => {
    try {
      let fetchedUserPlant = await API.graphql(
        graphqlOperation(listUserPlants, {
          filter: {userID: {eq: userId}, plantID: {eq: plantId}},
        }),
      );

      if (fetchedUserPlant.data.listUserPlants.items.length > 0) {
        console.log('Plant Exists');
        return;
      }

      await API.graphql(
        graphqlOperation(createUserPlants, {
          input: {
            userID: userId,
            plantID: plantId,
            water_status: 'yes',
          },
        }),
      );
      setNumber(old => old + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}) => (
    <ListPlant plant={item} func={() => addPlant(item.id)} />
  );
  if (loading)
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  else if (notUserPlants.length != 0) {
    return (
      <View style={styles.container}>
        <FlatList
          data={notUserPlants}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  } else {
    return (
      <View
        style={[
          styles.container,
          {
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Text style={styles.text}>
          Congratulations!!! You got all the plants in our Collection
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCE2DE',
    flex: 1,
    // backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
  },
});

import React, {useEffect, useState, useMemo, useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {listUserPlants} from './queries';
import {deleteUserPlants} from '../graphql/mutations';
import {onCreateUserPlants} from '../graphql/subscriptions';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {UserContext} from '../../App';
import PlantItem from '../components/plantItem';

/**
 *  Display the collection of user plants
 *
 * @export
 * @param {*} {navigation, route}
 * @return {View} collection of user Plants
 */

export default function myPlants({navigation, route}) {
  const [userPlants, setUserPlants] = useState([]);
  const [myPlantsloading, setMyPlantsLoading] = useState(true);
  const [number, setNumber] = useState(0);
  const {user} = useContext(UserContext);
  const [userId, setUserId] = useState(user.sub);

  /**
   * Listens for a real time changes in User Plants table
   * If a User adds a new plant then it refreshes the page
   * @return {*} Updated plant list
   */
  useMemo(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateUserPlants),
    ).subscribe(msg => {
      if (msg.value.data.onCreateUserPlants.userID == userId) {
        setNumber(old => old + 1);
      } else {
        console.log('no', userId);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useMemo(() => {
    try {
      const fetchUserPlants = async () => {
        const fetchedUserPlants = await API.graphql(
          graphqlOperation(listUserPlants, {
            filter: {userID: {eq: userId}},
          }),
        );
        setUserPlants(fetchedUserPlants.data.listUserPlants.items);
        setMyPlantsLoading(false);
      };
      fetchUserPlants();
    } catch (error) {
      console.log(error);
    }
  }, [number]);

  const removePlant = async plantId => {
    try {
      await API.graphql(
        graphqlOperation(deleteUserPlants, {
          input: {id: plantId},
          condition: {userID: {eq: userId}},
        }),
      );
      setNumber(old => old + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}) => (
    <PlantItem
      plant={item.Plant.items}
      func={() => removePlant(item.id)}
      water_status={item.water_status}
    />
  );
  if (myPlantsloading)
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  else if (userPlants.length != 0) {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          data={userPlants}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Add plants to your Collection</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    backgroundColor: '#DCE2DE',
  },
  text: {
    fontSize: 24,
  },
});

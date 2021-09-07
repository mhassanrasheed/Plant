import 'react-native-gesture-handler';
import React, {useEffect, useState, createContext} from 'react';
import {View, Pressable, ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {getUser} from './src/graphql/queries';
import {createUser} from './src/graphql/mutations';
import {withAuthenticator} from 'aws-amplify-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllPlant from './src/Screens/allPlants';
import MyPlant from './src/Screens/myPlants';

export const UserContext = createContext();

/**
 * Process User detials when they login/signup
 * if it is a new user then a record is created in a User DynamoDB table
 * @return {View} which displays User's collection of plants
 */
const App = () => {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        setUser(userInfo.attributes);
        if (userInfo) {
          const userData = await API.graphql(
            graphqlOperation(getUser, {id: userInfo.attributes.sub}),
          );

          if (userData.data.getUser) {
            console.log('This user Already exists in database');
            if (initializing) setInitializing(false);
            return;
          }

          const newUser = await API.graphql(
            graphqlOperation(createUser, {
              input: {
                id: userInfo.attributes.sub,
                name: userInfo.username,
                imageUri:
                  'https://lh3.googleusercontent.com/a-/AOh14GjchKs5Ss6ncJEohW8JE4Yyz7sYhM8kaROcHwyRyA=s288-p-rw-no',
              },
            }),
          );

          if (newUser) if (initializing) setInitializing(false);
        }
      };
      fetchUser();
    } catch (error) {}
  }, []);

  if (initializing)
    return (
      <View
        style={{backgroundColor: 'white', flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );

  return (
    <UserContext.Provider value={{user: user}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              let iconName;
              if (route.name === 'HOME') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'ADD PLANT') {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
              }
              return <Ionicons name={iconName} size={30} color={'green'} />;
            },
            headerRight: () => (
              <View style={{marginEnd: 5}}>
                <Pressable onPress={() => Auth.signOut()}>
                  <Ionicons name={'log-out'} size={30} color="green" />
                </Pressable>
              </View>
            ),
          })}>
          <Tab.Screen name="HOME" component={MyPlant} />
          <Tab.Screen name="ADD PLANT" component={AllPlant} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default withAuthenticator(App);

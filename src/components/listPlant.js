import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Storage} from 'aws-amplify';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 *
 *
 * @param {*} {plant, func}
 * @return {*} View Displaying the detial of each plant available to be added to collection
 */
const listPlant = ({plant, func}) => {
  const [imageUri, setImageUri] = useState();
  useEffect(() => {
    Storage.get(plant.image).then(setImageUri);
  }, []);
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: imageUri}} />
      <Text style={styles.title}>{plant.name}</Text>
      <Pressable onPress={func} style={styles.button}>
        <Ionicons name="add-circle" size={30} color="#89CFF0" />
      </Pressable>
    </View>
  );
};

export default listPlant;

const styles = StyleSheet.create({
  item: {
    // backgroundColor: '#DCE2DE',
    backgroundColor: 'white',
    padding: '5%',
    flex: 1,
    margin: 5,
    borderRadius: 20,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    margin: 5,
  },
  description: {
    fontSize: 24,
  },
  button: {
    marginLeft: '90%',
    position: 'absolute',
    alignSelf: 'center',
  },
});

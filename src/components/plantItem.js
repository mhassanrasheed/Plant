import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, StyleSheet, Image, Button} from 'react-native';
import {Storage} from 'aws-amplify';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * Display the detials of each plant in User collection
 *
 * @param {*} {plant, func, water_status}
 * @return {*}
 */
const PlantItem = ({plant, func, water_status}) => {
  const [imageUri, setImageUri] = useState();
  useEffect(() => {
    Storage.get(plant[0].image).then(setImageUri);
  }, []);

  return (
    <View style={styles.item}>
      <Pressable onPress={func} style={styles.button}>
        <Ionicons name="remove-circle" size={30} color="red" />
      </Pressable>
      <View style={styles.imageContainer}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
          source={{uri: imageUri}}
        />
      </View>
      <View style={styles.divider}></View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{plant[0].name}</Text>
        <Text style={styles.description}>
          Temperature: {plant[0].temperature} C
        </Text>
        <Text style={[styles.description]}>
          Day Light: {plant[0].day_light}
        </Text>
        <Text style={styles.description}>
          Water Need: {plant[0].water_times}{' '}
          {plant[0].water_times > 1 ? 'times' : 'time'} in{' '}
          {plant[0].water_duration} days
        </Text>
        <Text style={[styles.description, {marginBottom: 2}]}>
          Water Given: {water_status}
        </Text>
      </View>
    </View>
  );
};

export default PlantItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    margin: 5,
    borderWidth: 2,
    borderRadius: 20,
    height: '95%',
    padding: 20,
    borderColor: 'gray',
  },
  imageContainer: {padding: 5, width: 250, height: 250},
  divider: {
    borderTopWidth: 0.5,
    margin: 10,
    borderTopColor: 'gray',
  },
  textContainer: {marginLeft: '5%', padding: 2},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
  },
  button: {
    alignSelf: 'flex-end',
  },
});

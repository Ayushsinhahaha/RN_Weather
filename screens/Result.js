import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Result = ({navigation}) => {
  const route = useRoute();
  const data = route.params;
  console.log('data', data);
  // let temperature = data.data.main;
  // temperature = Math.floor(temperature);
  let weather;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Temperature in {} is </Text>
        <Text style={styles.tempText}>{} degrees</Text>
      </View>
      <View>{/* <Text>{data.data.weather}</Text> */}</View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00704a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempText: {
    fontSize: 38,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: '800',
  },
});

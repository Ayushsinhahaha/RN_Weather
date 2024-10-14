import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WELCOME TO WEATHER APP</Text>
      <Image source={require('../assets/weatherimg.png')} style={styles.img} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00704a',
  },
  text: {
    fontSize: 38,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center',
  },
  img: {
    height: 250,
    width: 250,
  },
});

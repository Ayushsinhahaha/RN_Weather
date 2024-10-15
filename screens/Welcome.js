import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {API_KEY} from '@env';

const width = Dimensions.get('window').width;

let date = new Date().toLocaleDateString('de-DE');
console.log(date);

const Welcome = ({navigation}) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const fetchCity = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    )
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchCity();
  }, []);

  console.log('setdataaaa', weatherData);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>WEATHER APP</Text>
      </View>
      {/* Today's date */}
      <View style={styles.date}>
        <Text style={styles.dateText}>{date} </Text>
      </View>

      {/* Weather Image and Searchbox */}

      <View style={{alignItems: 'center', marginTop: 40}}>
        <Image
          source={require('../assets/weatherimg.png')}
          style={{height: 300, width: 300}}
        />
        <View style={{marginTop: 40}}>
          <TextInput
            value={city}
            onChangeText={txt => setCity(txt)}
            placeholder="Enter a Place"
            placeholderTextColor={'#000'}
            style={{
              width: 40,
              width: width - 100,
              borderRadius: 20,
              borderWidth: 1,
              textAlign: 'center',
              marginBottom: 20,
            }}
          />
          <Button
            onPress={() => {
              fetchCity();
              navigation.navigate('Result', {data: weatherData});
            }}
            title="Search"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 80,
    width: width,
    backgroundColor: '#00704a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
  },
  date: {
    marginTop: 40,
  },
  dateText: {
    fontSize: 26,
    fontWeight: '900',
    color: '#00704a',
    textAlign: 'center',
  },
});

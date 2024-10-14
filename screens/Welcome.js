import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;

let date = new Date();

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>WEATHER APP</Text>
      </View>

      {/* Today's date */}
      <View style={styles.date}>
        <Text style={styles.dateText}>
          {day}.{month}.{year}
        </Text>
      </View>

      {/* Weather Info */}
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

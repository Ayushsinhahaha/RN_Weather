import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Result = ({navigation}) => {
  const route = useRoute();
  const data = route.params;
  console.log('data', data);
  return (
    <View>
      <Text>Result</Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({});

import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
        <Text>go to activity</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

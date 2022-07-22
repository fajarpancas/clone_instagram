import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import InstaStories from '../../components/stories/InstaStories';

const STORIES = require('./Stories.json');

export default function Home({navigation}) {
  return (
    <SafeAreaView>
      <InstaStories data={STORIES} />
    </SafeAreaView>
  );
}

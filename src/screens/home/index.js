import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import PostRowItem from '../../components/posts/PostRowItem';
import InstaStories from '../../components/stories/InstaStories';
import Posts from './Posts';
const STORIES = require('./Stories.json');

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={Posts}
        keyExtractor={(item, index) => item.id}
        renderItem={({item, index}) => {
          console.log({item});
          return <PostRowItem data={item} index={index} />;
        }}
        ListHeaderComponent={() => <InstaStories data={STORIES} />}
      />
    </SafeAreaView>
  );
}

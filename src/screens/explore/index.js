import React, {useCallback, useMemo} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {ExploreRowItem} from '../../components/explore/ExploreRowItem';
import PostInput from '../../components/explore/PostInput';
import {FeedRealmContext} from '../../realm/realmConfig';
import {Feeds} from '../../realm/schemas';

const {useQuery, useRealm} = FeedRealmContext;
export default function Explore({navigation}) {
  const realm = useRealm();
  const result = useQuery(Feeds);
  const feedSort = useMemo(() => result.sorted('createdAt', true), [result]);

  const handleCreate = useCallback(
    params => {
      realm.write(() => {
        realm.create('feeds', Feeds.generate(params));
      });
    },
    [realm],
  );

  const handleLike = useCallback(
    realmId => {
      realm.write(() => {
        const feed = realm?.objectForPrimaryKey('feeds', realmId);
        feed.likes = feed.likes + 1;
      });
    },
    [realm],
  );

  const handleDelete = useCallback(
    realmId => {
      realm.write(() => {
        const feed = realm?.objectForPrimaryKey('feeds', realmId);
        realm.delete(feed);
      });
    },
    [realm],
  );

  const toDetail = async id => {
    navigation.navigate('ExploreDetail', id);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={feedSort}
        keyExtractor={item => item?._id.toString()}
        ListHeaderComponent={() => <PostInput addPost={handleCreate} />}
        renderItem={({item}) => (
          <ExploreRowItem
            onPress={() => toDetail(item._id)}
            item={item}
            onLike={handleLike}
            onDelete={handleDelete}
          />
        )}
      />
    </SafeAreaView>
  );
}

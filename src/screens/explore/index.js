import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {ExploreRowItem} from '../../components/explore/ExploreRowItem';
import PostInput from '../../components/explore/PostInput';
import {FeedRealmContext} from '../../realm/realmConfig';
import {Feeds} from '../../realm/schemas';
import {Realm, useApp, useUser} from '@realm/react';
import {scaleHeight, scaleWidth} from '../../transforms/scale';
import Colors from '../../themes/Colors';
import debounce from 'lodash/debounce';

const {useQuery, useRealm} = FeedRealmContext;

export default function Explore({navigation}) {
  const [filter, setFilter] = useState('');
  const realm = useRealm();
  const result = useQuery(Feeds).filtered('caption CONTAINS $0', filter);
  const user = useUser();
  let feedSort = useMemo(() => result.sorted('createdAt', true), [result]);

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Feeds));
    });
  }, [realm, result]);

  const onChangeFilter = text => {
    setFilter(text);
  };
  const debounceFilter = debounce(onChangeFilter, 800);

  const handleLogout = useCallback(() => {
    user?.logOut();
  }, [user]);

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
        ListHeaderComponent={() => (
          <>
            <PostInput addPost={handleCreate} onLogout={handleLogout} />
            <TextInput
              placeholder="Search by caption"
              style={styles.textInput}
              autoCapitalize={false}
              defaultValue={filter}
              onChangeText={debounceFilter}
            />
          </>
        )}
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

const styles = StyleSheet.create({
  textInput: {
    alignSelf: 'center',
    width: scaleWidth(335),
    borderColor: Colors.grey300,
    borderWidth: 1,
    borderRadius: scaleWidth(10),
    padding: scaleWidth(10),
    marginBottom: scaleHeight(10),
  },
});

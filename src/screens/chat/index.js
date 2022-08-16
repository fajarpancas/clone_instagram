import React, {useCallback, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {FeedRealmContext} from '../../realm/realmConfig';
import {Chats} from '../../realm/schemas';
import {useUser} from '@realm/react';
import ChatBubble from '../../components/chat/ChatBubble';
import ChatInput from '../../components/chat/ChatInput';

const {useQuery, useRealm} = FeedRealmContext;

export default function Chat() {
  const realm = useRealm();
  const chats = useQuery('chats');
  const user = useUser();

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects('chats'));
    });
  }, [realm, chats]);

  const handleSend = useCallback(
    message => {
      realm.write(() => {
        realm.create(
          'chats',
          Chats.generate({
            username: user?.profile?.email,
            text: message,
            userId: user?.id,
          }),
        );
      });
    },
    [realm, user],
  );

  const handleUnsend = useCallback(
    messageId => {
      realm.write(() => {
        const chat = realm?.objectForPrimaryKey('chats', messageId);
        chat.isDeleted = true;
      });
    },
    [realm],
  );

  const handleDelete = useCallback(
    messageId => {
      realm.write(() => {
        const chat = realm?.objectForPrimaryKey('chats', messageId);
        realm.delete(chat);
      });
    },
    [realm],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={chats}
        keyExtractor={item => item._id.toString()}
        renderItem={({item, index}) => (
          <ChatBubble
            onDelete={handleDelete}
            onUnsend={handleUnsend}
            user={user}
            item={item}
          />
        )}
      />
      <ChatInput onSend={handleSend} />
    </SafeAreaView>
  );
}

import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {FeedRealmContext} from '../../realm/realmConfig';
import {Chats} from '../../realm/schemas';
import {useUser} from '@realm/react';
import ChatBubble from '../../components/chat/ChatBubble';
import ChatInput from '../../components/chat/ChatInput';

const {useQuery, useRealm} = FeedRealmContext;

export default function Chat() {
  const [editActive, setEditActive] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [editMessageId, setEditMessageId] = useState(null);

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

  const handleUpdate = useCallback(
    message => {
      realm.write(() => {
        const chat = realm?.objectForPrimaryKey('chats', message.messageId);
        chat.text = message.newMessage;
        chat.isEdit = true;
      });
      setEditActive(false);
      setEditValue('');
      setEditMessageId(null);
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
            index={index}
            onDelete={handleDelete}
            onUnsend={handleUnsend}
            onUpdate={(id, message) => {
              setEditActive(true);
              setEditMessageId(id);
              setEditValue(message);
            }}
            user={user}
            item={item}
          />
        )}
      />
      <ChatInput
        editActive={editActive}
        editValue={editValue}
        editMessageId={editMessageId}
        onSend={handleSend}
        onUpdate={handleUpdate}
        onCancelEdit={() => {
          setEditActive(false);
          setEditMessageId(null);
          setEditValue('');
        }}
      />
    </SafeAreaView>
  );
}

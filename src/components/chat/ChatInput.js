import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../themes/Colors';
import {scaleWidth} from '../../transforms/scale';

export default function ChatInput({
  onSend,
  onUpdate,
  onCancelEdit,
  editActive,
  editValue,
  editMessageId,
}) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(editValue);
    console.log({editValue});
  }, [editValue]);

  return (
    <View style={styles.messageWrapper}>
      <TextInput
        multiline
        placeholder="Write message here..."
        onChangeText={setMessage}
        value={message}
        style={styles.textInput}
      />
      <TouchableOpacity
        disabled={message === ''}
        onPress={() => {
          if (editActive && editValue === message) {
            setMessage('');
            onCancelEdit();
          } else if (editActive) {
            onUpdate({newMessage: message, messageId: editMessageId});
          } else {
            onSend(message);
          }
          setMessage('');
        }}>
        {editActive && editValue === message ? (
          <Text>Cancel</Text>
        ) : (
          <Text
            style={{
              color: message === '' ? Colors.grey400 : Colors.grey900,
            }}>{`${editActive ? 'Update' : 'Send'}`}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  messageWrapper: {
    padding: scaleWidth(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  textInput: {
    borderColor: Colors.grey300,
    borderWidth: 1,
    paddingTop: scaleWidth(10),
    padding: scaleWidth(10),
    borderRadius: scaleWidth(10),
    width: scaleWidth(300),
    marginRight: scaleWidth(10),
    maxHeight: 200,
  },
});

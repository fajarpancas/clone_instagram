import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../themes/Colors';
import {scaleWidth} from '../../transforms/scale';

export default function ChatInput({onSend}) {
  const [message, setMessage] = useState('');
  return (
    <View style={styles.messageWrapper}>
      <TextInput
        placeholder="Write message here..."
        onChangeText={setMessage}
        value={message}
        style={styles.textInput}
      />
      <TouchableOpacity
        onPress={() => {
          onSend(message);
          setMessage('');
        }}>
        <Text>send</Text>
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
    padding: scaleWidth(10),
    borderRadius: scaleWidth(10),
    width: scaleWidth(300),
    marginRight: scaleWidth(10),
  },
});

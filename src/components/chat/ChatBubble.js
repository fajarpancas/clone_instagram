import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../themes/Colors';
import {scaleHeight, scaleWidth} from '../../transforms/scale';

const ChatBubble = ({item, user, onUnsend, onDelete}) => {
  const {text, userId, username, createdAt, isDeleted} = item;
  const name = username.split('@')[0];

  if (userId === user?.id) {
    return (
      <>
        <View style={styles.senderWrapper}>
          {isDeleted ? (
            <Text style={styles.deletedMessage}>You unsend this message</Text>
          ) : (
            <Text style={styles.messageText}>{text}</Text>
          )}
        </View>
        <View style={styles.timeWrapper}>
          <TouchableOpacity onPress={() => onDelete(item._id)}>
            <Text style={styles.deletePermanently}>Delete</Text>
          </TouchableOpacity>
          {!isDeleted && (
            <>
              <Text style={[styles.time, styles.space]}>|</Text>
              <TouchableOpacity onPress={() => onUnsend(item._id)}>
                <Text style={styles.delete}>Unsend</Text>
              </TouchableOpacity>
            </>
          )}
          <Text style={[styles.time, styles.space]}>|</Text>
          <Text
            style={{
              ...styles.time,
              ...styles.timeSender,
            }}>
            {moment(createdAt).format('HH:mm A')}
          </Text>
        </View>
      </>
    );
  }

  return (
    <>
      <View style={styles.receiverWrapper}>
        <Text style={styles.senderName}>{name}</Text>
        {isDeleted ? (
          <Text
            style={styles.deletedMessage}>{`${name} unsend this message`}</Text>
        ) : (
          <Text style={styles.messageText}>{text}</Text>
        )}
      </View>
      <Text style={{...styles.time, marginLeft: scaleWidth(10)}}>
        {moment(createdAt).format('HH:mm A')}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  receiverWrapper: {
    backgroundColor: '#373945',
    maxWidth: scaleWidth(250),
    minHeight: scaleHeight(10),
    alignSelf: 'flex-start',
    marginLeft: scaleWidth(10),
    marginTop: scaleWidth(10),
    marginBottom: scaleWidth(5),
    borderTopLeftRadius: scaleWidth(15),
    borderTopRightRadius: scaleWidth(15),
    borderBottomRightRadius: scaleWidth(15),
    paddingVertical: scaleWidth(10),
    paddingHorizontal: scaleWidth(15),
  },
  senderWrapper: {
    backgroundColor: '#319de6',
    maxWidth: scaleWidth(250),
    minHeight: scaleHeight(30),
    alignSelf: 'flex-end',
    marginRight: scaleWidth(10),
    marginTop: scaleWidth(10),
    marginBottom: scaleWidth(5),
    borderTopLeftRadius: scaleWidth(15),
    borderTopRightRadius: scaleWidth(15),
    borderBottomLeftRadius: scaleWidth(15),
    paddingVertical: scaleWidth(10),
    paddingHorizontal: scaleWidth(15),
  },
  senderName: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: '700',
  },
  messageText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '300',
  },
  time: {
    fontSize: 12,
    color: Colors.grey500,
  },
  timeSender: {
    marginRight: scaleWidth(10),
  },
  timeWrapper: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  delete: {
    fontSize: 12,
    color: Colors.vividBlue,
  },
  deletePermanently: {
    fontSize: 12,
    color: 'red',
  },
  space: {
    marginHorizontal: scaleWidth(5),
  },
  deletedMessage: {
    color: Colors.white,
    fontStyle: 'italic',
  },
});

export default ChatBubble;

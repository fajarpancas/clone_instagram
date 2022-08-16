import moment from 'moment';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../themes/Colors';
import {scaleHeight, scaleWidth} from '../../transforms/scale';

const editIcon = require('./edit.png');
const ChatBubble = ({index, item, user, onUnsend, onDelete, onUpdate}) => {
  const {text, userId, username, createdAt, isDeleted, isEdit} = item;
  const name = username.split('@')[0];

  if (userId === user?.id) {
    return (
      <>
        <View style={styles.messageWrapper(index === 0)}>
          {!isDeleted && (
            <TouchableOpacity onPress={() => onUpdate(item._id, text)}>
              <Image
                source={editIcon}
                style={styles.iconEdit}
                resizeMethod="resize"
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
          <View style={styles.senderWrapper}>
            {isDeleted ? (
              <Text style={styles.deletedMessage}>You unsend this message</Text>
            ) : (
              <Text style={styles.messageText}>
                {text}
                {isEdit && <Text style={styles.edited}> (Edited)</Text>}
              </Text>
            )}
          </View>
        </View>
        <View style={{...styles.timeWrapper, ...styles.spaceBottom}}>
          <View style={styles.flexRow}>
            <TouchableOpacity onPress={() => onDelete(item._id)}>
              <Text style={styles.deletePermanently}>Delete</Text>
            </TouchableOpacity>
            {!isDeleted && (
              <>
                <Text style={[styles.time, styles.space, styles.separator]}>
                  |
                </Text>
                <TouchableOpacity onPress={() => onUnsend(item._id)}>
                  <Text style={styles.unsend}>Unsend</Text>
                </TouchableOpacity>
              </>
            )}
            <Text style={[styles.time, styles.space, styles.separator]}>|</Text>
            <Text style={styles.time}>
              {moment(createdAt).format('HH:mm A')}
            </Text>
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      <View style={styles.receiverWrapper(index === 0)}>
        <Text style={styles.senderName}>{name}</Text>
        {isDeleted ? (
          <Text
            style={styles.deletedMessage}>{`${name} unsend this message`}</Text>
        ) : (
          <Text style={styles.messageText}>
            {text}
            {isEdit && <Text style={styles.edited}> (Edited)</Text>}
          </Text>
        )}
      </View>
      <Text
        style={{
          ...styles.time,
          ...styles.spaceBottom,
          marginLeft: scaleWidth(10),
        }}>
        {moment(createdAt).format('HH:mm A')}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  messageWrapper: firstIndex => {
    return {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      alignItems: 'flex-end',
      marginBottom: scaleWidth(5),
      marginRight: scaleWidth(10),
      marginTop: firstIndex ? scaleHeight(15) : 0,
    };
  },
  receiverWrapper: firstIndex => {
    return {
      backgroundColor: '#373945',
      maxWidth: scaleWidth(250),
      minHeight: scaleHeight(10),
      alignSelf: 'flex-start',
      marginLeft: scaleWidth(10),
      marginBottom: scaleWidth(5),
      marginTop: firstIndex ? scaleHeight(15) : 0,
      borderTopLeftRadius: scaleWidth(15),
      borderTopRightRadius: scaleWidth(15),
      borderBottomRightRadius: scaleWidth(15),
      paddingVertical: scaleWidth(10),
      paddingHorizontal: scaleWidth(15),
    };
  },
  senderWrapper: {
    backgroundColor: '#319de6',
    maxWidth: scaleWidth(250),
    minHeight: scaleHeight(30),
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
    marginBottom: scaleHeight(5),
  },
  messageText: {
    color: Colors.white,
    lineHeight: 21,
    fontSize: 15,
  },
  time: {
    fontSize: 12,
    color: Colors.grey900,
  },
  timeWrapper: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginRight: scaleWidth(10),
  },
  unsend: {
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
  iconEdit: {
    marginRight: scaleWidth(10),
    width: scaleWidth(15),
    height: scaleHeight(15),
    tintColor: Colors.grey400,
  },
  flexRow: {
    flexDirection: 'row',
  },
  edited: {
    fontSize: 14,
    color: 'white',
    fontStyle: 'italic',
    fontWeight: '300',
  },
  spaceTop: {
    marginTop: scaleHeight(2),
  },
  separator: {
    color: Colors.grey400,
  },
  spaceBottom: {
    marginBottom: scaleHeight(10),
  },
});

export default ChatBubble;

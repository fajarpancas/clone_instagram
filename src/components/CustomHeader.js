import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../themes/Colors';
import {scaleWidth} from '../transforms/scale';

const chatIcon = require('./chat.png');
const CustomHeader = props => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.instagram}>Clone Instagram</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
        <Image
          source={chatIcon}
          style={styles.chatIcon}
          resizeMode="contain"
          resizeMethod="resize"
        />
      </TouchableOpacity>
    </View>
  );
};
export default CustomHeader;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: scaleWidth(375),
    paddingHorizontal: scaleWidth(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Colors.grey300,
    borderBottomWidth: 0.5,
    alignItems: 'center',
  },
  instagram: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '500',
  },
  chatIcon: {
    width: scaleWidth(23),
    height: scaleWidth(23),
  },
});

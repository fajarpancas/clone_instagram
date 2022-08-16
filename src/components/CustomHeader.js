import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scaleWidth} from '../transforms/scale';

const CustomHeader = props => {
  return (
    <View style={styles.wrapper}>
      <Text>Instagram</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
        <Text>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomHeader;

const styles = StyleSheet.create({
  wrapper: {
    width: scaleWidth(375),
    paddingHorizontal: scaleWidth(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

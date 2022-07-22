import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scaleWidth} from '../transforms/scale';

const CustomHeader = props => {
  return (
    <View style={styles.wrapper}>
      <Text>Instagram</Text>
    </View>
  );
};
export default CustomHeader;

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: scaleWidth(15),
  },
});

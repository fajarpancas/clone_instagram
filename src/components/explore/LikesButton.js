import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {scaleWidth} from '../../transforms/scale';

const loveIcon = require('./heart.png');
const deleteIcon = require('./trash-bin.png');
const LikesButton = ({onLike, onDelete}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onLike}>
        <Image
          source={loveIcon}
          style={{width: scaleWidth(30), height: scaleWidth(30)}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={{marginLeft: scaleWidth(10)}}>
        <Image
          source={deleteIcon}
          style={{width: scaleWidth(25), height: scaleWidth(25)}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleWidth(5),
  },
});
export default LikesButton;

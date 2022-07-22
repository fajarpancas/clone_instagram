import React, {PureComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../themes/Colors';
import {scaleWidth} from '../../transforms/scale';

const CONTENT_SIZE = 65;
const IMAGE_SIZE = 60;

class StoriesRowItem extends PureComponent {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.stories}>
          <View style={styles.preview} />
        </TouchableOpacity>
        <Text numberOfLines={1}>{item.username}</Text>
      </View>
    );
  }
}

export default StoriesRowItem;

const styles = StyleSheet.create({
  wrapper: {
    width: scaleWidth(CONTENT_SIZE),
    marginHorizontal: scaleWidth(8),
    alignItems: 'center',
  },
  stories: {
    backgroundColor: Colors.pink,
    height: scaleWidth(CONTENT_SIZE),
    width: scaleWidth(CONTENT_SIZE),
    borderRadius: scaleWidth(CONTENT_SIZE / 2),
    marginBottom: scaleWidth(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    backgroundColor: Colors.greyLava,
    height: scaleWidth(IMAGE_SIZE),
    width: scaleWidth(IMAGE_SIZE),
    borderWidth: scaleWidth(3),
    borderColor: Colors.white,
    borderRadius: scaleWidth(IMAGE_SIZE / 2),
  },
});

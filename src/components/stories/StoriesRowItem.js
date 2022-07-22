import React, {PureComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../themes/Colors';
import {scaleWidth} from '../../transforms/scale';

const CONTENT_SIZE = 65;
const IMAGE_SIZE = 60;

class StoriesRowItem extends PureComponent {
  render() {
    const {item, index} = this.props;
    return (
      <View
        style={{
          ...styles.wrapper,
          marginLeft: index === 0 ? scaleWidth(15) : 0,
        }}>
        <TouchableOpacity style={styles.stories}>
          <View style={styles.preview} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 12,
          }}
          numberOfLines={1}>
          {item.username}
        </Text>
      </View>
    );
  }
}

export default StoriesRowItem;

const styles = StyleSheet.create({
  wrapper: {
    width: scaleWidth(CONTENT_SIZE),
    marginRight: scaleWidth(15),
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

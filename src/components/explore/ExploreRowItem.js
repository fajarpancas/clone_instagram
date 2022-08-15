import React, {PureComponent} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../themes/Colors';
import {scaleWidth} from '../../transforms/scale';
import LikesButton from './LikesButton';
import moment from 'moment';

export class ExploreRowItem extends PureComponent {
  render() {
    const {item, onPress, onLike, onDelete} = this.props;
    return (
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <View>
          <Image
            source={{uri: item.photo}}
            style={styles.image}
            resizeMethod="resize"
            resizeMode="cover"
          />
          <View style={styles.idWrapper}>
            <Text style={styles.idText}>{item._id.toString()}</Text>
          </View>
          <View style={{marginTop: scaleWidth(10)}}>
            <LikesButton
              onLike={() => onLike(item._id)}
              onDelete={() => onDelete(item._id)}
            />
            <Text style={styles.fontBlack}>{item?.likes} likes</Text>
            <Text style={[styles.alignText, styles.fontGrey]}>
              {item.caption}
            </Text>
            <Text style={[styles.fontGrey, styles.fontSpace]}>
              {moment(item.createdAt).fromNow()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: scaleWidth(20),
    paddingHorizontal: scaleWidth(20),
    paddingBottom: scaleWidth(20),
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  idWrapper: {
    height: scaleWidth(40),
    justifyContent: 'center',
    paddingHorizontal: scaleWidth(10),
    alignItems: 'center',
    position: 'absolute',
    right: scaleWidth(10),
    top: scaleWidth(10),
    borderRadius: scaleWidth(20),
    backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: scaleWidth(200),
  },
  alignText: {
    textAlign: 'justify',
  },
  idText: {
    color: 'white',
    fontSize: scaleWidth(20),
  },
  fontBlack: {
    color: Colors.grey900,
    fontSize: 13,
    lineHeight: 16,
  },
  fontGrey: {
    color: Colors.grey500,
    fontSize: 13,
    lineHeight: 16,
  },
  fontSpace: {
    fontSize: 10,
    marginTop: scaleWidth(5),
  },
});

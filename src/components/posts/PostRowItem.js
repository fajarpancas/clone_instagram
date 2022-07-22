import React, {PureComponent} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../themes/Colors';
import {scaleHeight, scaleWidth} from '../../transforms/scale';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import moment from 'moment';

const {width, height} = Dimensions.get('window');

const Metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

class PostRowItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      indexSlide: 0,
    };
  }

  get pagination() {
    const {data} = this.props;
    const {indexSlide} = this.state;
    return (
      <Pagination
        dotsLength={data && data.posts ? data.posts.length : 0}
        activeDotIndex={indexSlide}
        containerStyle={{
          backgroundColor: 'transparent',
          marginTop: scaleHeight(-8),
          marginBottom: scaleHeight(-15),
        }}
        dotStyle={styles.activeDotStyle}
        inactiveDotStyle={styles.dotStyle}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  }

  render() {
    const {data} = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.profileWrapper}>
          <Image source={data.avatar} style={styles.avatar} />
          <Text style={{fontSize: 12, marginLeft: scaleWidth(10)}}>
            {data.username}
          </Text>
        </View>
        <Carousel
          renderItem={({item}) => (
            <Image source={item.image} style={styles.image} />
          )}
          key={item => item.id}
          onSnapToItem={index => this.setState({indexSlide: index})}
          data={data.posts}
          sliderWidth={Metrics.screenWidth}
          itemWidth={Metrics.screenWidth}
          sliderHeight={scaleHeight(50)}
          itemHeight={scaleHeight(60)}
        />
        {this.pagination}
        <View style={styles.bottomWrapper}>
          <Text style={styles.fontBlack}>{data.likes} likes</Text>
          <Text
            style={{
              ...styles.fontBlack,
              marginVertical: scaleHeight(2),
            }}>
            {data.username}
            <Text style={styles.fontGrey}>{` ${data.caption}`}</Text>
          </Text>

          <TouchableOpacity>
            <Text
              style={
                styles.fontGreyLight
              }>{`View all ${data.commentCount} comments`}</Text>
          </TouchableOpacity>

          <Text
            style={{
              ...styles.fontGreyLightSmall,
              marginTop: scaleHeight(2),
            }}>
            {moment(data.createdAt, 'YYYY-MM-DD HH:mm:ss').fromNow()}
          </Text>
        </View>
      </View>
    );
  }
}

export default PostRowItem;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.white,
    paddingTop: scaleHeight(10),
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: scaleWidth(7),
    marginLeft: scaleWidth(15),
  },
  avatar: {
    width: scaleWidth(30),
    height: scaleWidth(30),
    borderRadius: scaleWidth(30 / 2),
  },
  image: {
    width: scaleWidth(375),
    height: scaleHeight(300),
  },
  bottomWrapper: {
    paddingVertical: scaleWidth(10),
    paddingHorizontal: scaleWidth(15),
  },
  fontGreyLightSmall: {
    color: Colors.grey400,
    fontSize: 11,
    lineHeight: 16,
  },
  fontGreyLight: {
    color: Colors.grey400,
    fontSize: 13,
    lineHeight: 16,
  },
  fontGrey: {
    color: Colors.grey500,
    fontSize: 13,
    lineHeight: 16,
  },
  fontBlack: {
    color: Colors.grey900,
    fontSize: 13,
    lineHeight: 16,
  },
  dotStyle: {
    zIndex: 1,
    width: scaleWidth(5.5),
    height: scaleWidth(5.5),
    borderRadius: scaleWidth(4),
    backgroundColor: Colors.grey400,
    marginLeft: scaleWidth(-5),
    marginRight: scaleWidth(-5),
  },
  activeDotStyle: {
    width: scaleWidth(6),
    height: scaleWidth(6),
    borderRadius: scaleWidth(4),
    backgroundColor: Colors.vividBlue,
    marginLeft: scaleWidth(-5),
    marginRight: scaleWidth(-5),
  },
});

import React, {useCallback} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import InputRow from '../../components/explore/InputRow';
import LikesButton from '../../components/explore/LikesButton';
import {FeedRealmContext} from '../../realm/realmConfig';
import Colors from '../../themes/Colors';
import {scaleHeight, scaleWidth} from '../../transforms/scale';

export default function ExploreDetail({route}) {
  const id = route?.params;
  const {useObject, useRealm} = FeedRealmContext;
  const data = useObject('feeds', id);
  const realm = useRealm();

  const handleSubmit = useCallback(
    params => {
      realm.write(() => {
        data.caption = params.caption;
      });
    },
    [realm, data],
  );

  const handleLike = useCallback(() => {
    realm.write(() => {
      data.likes = data.likes + 1;
    });
  }, [realm, data]);

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <Image
          source={{uri: data?.photo}}
          style={styles.image}
          resizeMethod="auto"
          resizeMode="cover"
        />
        <View style={styles.idWrapper}>
          <Text style={styles.idText}>{data?._id.toString()}</Text>
        </View>
        <LikesButton onLike={handleLike} />

        <View>
          <Text>{data?.username}</Text>
          <Text style={styles.fontBlack}>{data?.likes} likes</Text>
          <View style={styles.bottomWrapper}>
            <Text
              style={{
                ...styles.fontBlack,
                marginVertical: scaleHeight(2),
              }}>
              {data?.username}
              <Text style={styles.fontGrey}>{` ${data?.caption}`}</Text>
            </Text>

            <TouchableOpacity>
              <Text
                style={
                  styles.fontGreyLight
                }>{`View all ${data?.comment} comments`}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <InputRow data={data} onSubmit={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: scaleWidth(20),
  },
  idWrapper: {
    height: scaleWidth(40),
    justifyContent: 'center',
    paddingHorizontal: scaleWidth(10),
    alignItems: 'center',
    position: 'absolute',
    right: scaleWidth(30),
    top: scaleWidth(10),
    borderRadius: scaleWidth(20),
    backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: scaleWidth(200),
    marginBottom: scaleHeight(10),
  },
  alignText: {
    textAlign: 'justify',
  },
  bottomWrapper: {
    marginBottom: scaleHeight(40),
  },
  idText: {
    color: 'white',
    fontSize: scaleWidth(20),
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
});

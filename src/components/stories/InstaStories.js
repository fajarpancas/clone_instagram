import React, {PureComponent} from 'react';
import {FlatList, View} from 'react-native';
import Colors from '../../themes/Colors';
import {scaleHeight, scaleWidth} from '../../transforms/scale';
import StoryRowItem from './StoriesRowItem';

class InstaStories extends PureComponent {
  render() {
    const {data} = this.props;
    return (
      <View
        style={{
          backgroundColor: Colors.white,
          paddingVertical: scaleHeight(5),
          borderBottomColor: Colors.greyf2,
          borderBottomWidth: scaleWidth(1.5),
        }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <StoryRowItem item={item} index={index} />
          )}
          data={data}
        />
      </View>
    );
  }
}

export default InstaStories;

import React from 'react';
import {Text, View} from 'react-native';

const Childs = React.memo(() => {
  console.log('RERENDER 1');
  return (
    <View>
      <Text>123</Text>
    </View>
  );
});
export default Childs;

import React, {useReducer, useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import {reelsReducer, REELS_ACTIONS_TYPE} from './reelsReducer';

export default function Reels() {
  const [state, dispatch] = useReducer(reelsReducer, {count: 0});
  const [customNumber, setCustomNumber] = useState('');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <Button
          title="-"
          onPress={() => {
            dispatch({type: REELS_ACTIONS_TYPE.decrement});
          }}
        />
        <Text style={{paddingHorizontal: 30}}>{state.count}</Text>
        <Button
          title="+"
          onPress={() => {
            dispatch({type: REELS_ACTIONS_TYPE.increment});
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: 'lightgrey',
          borderWidth: 1,
          borderRadius: 20,
          paddingHorizontal: 10
        }}>
        <TextInput
          placeholder="custom number"
          style={{paddingVertical: 10}}
          maxLength={4}
          value={customNumber}
          keyboardType="numeric"
          onChangeText={text => setCustomNumber(parseInt(text, 10))}
        />
        <Button
          title="Add"
          onPress={() => {
            if (customNumber !== '') {
              setCustomNumber('');
              dispatch({type: REELS_ACTIONS_TYPE.custom, data: customNumber});
            }
          }}
        />
      </View>
      <Text>{customNumber}</Text>
      <Button
        color={'red'}
        title={'RESET'}
        onPress={() => dispatch({type: REELS_ACTIONS_TYPE.reset})}
      />
    </SafeAreaView>
  );
}

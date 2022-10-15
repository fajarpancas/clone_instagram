import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import Childs from './childs';

export default function Shopping() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <SafeAreaView>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 20
        }}>
        Total data: {data.length}
      </Text>
      <TouchableOpacity activeOpacity={1} onPress={() => setCount(count + 1)}>
        <Text>count {count}</Text>
      </TouchableOpacity>
      <Childs />
      {/* <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          const r = Math.floor(Math.random() * (255 - 0) + 0);
          const g = Math.floor(Math.random() * (255 - 0) + 0);
          const b = Math.floor(Math.random() * (255 - 0) + 0);
          return (
            <View
              style={{
                marginHorizontal: 20,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    borderRadius: 20,
                    marginRight: 10,
                    width: 40,
                    height: 40,
                    backgroundColor: `rgb(${r}, ${g}, ${b} )`
                  }}
                />
                <View>
                  <Text>{item.email}</Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 12,
                  color: 'grey',
                  marginTop: 10,
                  lineHeight: 20,
                }}>
                {item.body}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
              marginVertical: 20,
              borderBottomColor: 'lightgrey',
            }}
          />
        )}
      /> */}
    </SafeAreaView>
  );
}

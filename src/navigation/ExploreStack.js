import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExploreScreen from '../screens/explore';
import ExploreDetailScreen from '../screens/explore/ExploreDetail';

const HomeStack = createNativeStackNavigator();

export default function ExploreStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={ExploreScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ExploreDetail"
        component={ExploreDetailScreen}
        options={{headerTitle: 'Detail'}}
      />
    </HomeStack.Navigator>
  );
}

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabScreen from './StackNavigation';
import ActivityScreen from '../screens/home/Activity';
import ChatScreen from '../screens/chat';
import ExploreDetailScreen from '../screens/explore/ExploreDetail';

const Stack = createNativeStackNavigator();

const BottomTabsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTabScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Activity" component={ActivityScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="ExploreDetail" component={ExploreDetailScreen} />
    </Stack.Navigator>
  );
};

export default BottomTabsNavigator;

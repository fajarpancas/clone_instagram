import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import ExploreScreen from '../screens/explore';
import ReelsScreen from '../screens/reels';
import ShoppingScreen from '../screens/shopping';
import ProfileScreen from '../screens/profile';

const Tab = createBottomTabNavigator();
const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="explore" component={ExploreScreen} />
      <Tab.Screen name="reels" component={ReelsScreen} />
      <Tab.Screen name="shopping" component={ShoppingScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

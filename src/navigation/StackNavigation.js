import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import ReelsScreen from '../screens/reels';
import ShoppingScreen from '../screens/shopping';
import ProfileScreen from '../screens/profile';
import ExploreScreen from '../screens/explore';
import CustomHeader from '../components/CustomHeader';

const Tabs = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation, route}) => ({
          headerTitle: '',
          headerLeft: props => (
            <CustomHeader navigation={navigation} {...props} />
          ),
        })}
      />
      <Tabs.Screen name="Explore" component={ExploreScreen} />
      <Tabs.Screen name="Reels" component={ReelsScreen} />
      <Tabs.Screen name="Shopping" component={ShoppingScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}

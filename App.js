import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './src/navigation/BotttomTabsNavigator';

export default function App() {
  return <NavigationContainer>{BottomTabsNavigator()}</NavigationContainer>;
}

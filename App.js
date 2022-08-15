import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './src/navigation/BotttomTabsNavigator';
// import {AppProvider} from './src/context/AppContext';
import {FeedRealmContext} from './src/realm/realmConfig';
import {AppProvider, UserProvider} from '@realm/react';
import {LoginScreen} from './src/screens/explore/loginScreen';
import {SafeAreaView} from 'react-native';

export default function App({appId}) {
  const {RealmProvider} = FeedRealmContext;

  return (
    <SafeAreaView style={{flex: 1}}>
      <RealmProvider>
        <NavigationContainer>
          <BottomTabsNavigator />
        </NavigationContainer>
      </RealmProvider>
    </SafeAreaView>
  );
}

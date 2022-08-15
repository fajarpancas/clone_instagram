/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {SYNC_CONFIG} from './sync.config';

const Apps = () =>
  SYNC_CONFIG.enabled ? <App appId={SYNC_CONFIG.appId} /> : <App />;

AppRegistry.registerComponent(appName, () => Apps);

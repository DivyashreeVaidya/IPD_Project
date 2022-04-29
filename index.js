/* eslint-disable prettier/prettier */
/**
 * @format
 */
import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';





const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };

PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },

  requestPermissions: Platform.OS === 'ios',
});

export default function Main() {
    return (
      <PaperProvider theme={theme} dark={false}>
        <App />
      </PaperProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
// AppRegistry.registerComponent(...);
//TrackPlayer.registerPlaybackService(() => require('./service'));

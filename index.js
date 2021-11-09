/**
 * @format
 */
import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };

export default function Main() {
    return (
      <PaperProvider theme={theme} dark={false}>
        <App />
      </PaperProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { createContext, useRef, useState } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Routes from './src/routes/routes';
import Toast from 'react-native-toast-message';
import ColorPalette from './src/config/color.config';

export const FreelancerProfileContext = createContext();

const App = () => {
  const [freelancer, setFreelancer] = useState(null);

  return (
    <FreelancerProfileContext.Provider value={{ freelancer, setFreelancer }}>
      <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
        <Routes />
        <Toast />
      </SafeAreaView>
    </FreelancerProfileContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorPalette.primaryBackground,
    flex: 1
  }
});

Object.freeze(styles);

export default App;

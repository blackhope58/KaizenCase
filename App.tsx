import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Router from './src/navigation/Router';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <Router />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});

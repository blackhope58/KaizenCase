import {SafeAreaView} from 'react-native';
import React from 'react';
import BottomTabsNavigation from './BottomTabsNavigation';
import {NavigationContainer} from '@react-navigation/native';

const Router = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <BottomTabsNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Router;

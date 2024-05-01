import {SafeAreaView} from 'react-native';
import React from 'react';
import BottomTabsNavigation from './BottomTabsNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../screens/Detail';

const {Navigator, Screen} = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Navigator screenOptions={{headerShown: false}}>
          <Screen
            name="BottomTabsNavigation"
            component={BottomTabsNavigation}
          />
          <Screen name="Detail" component={Detail} />
        </Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Router;

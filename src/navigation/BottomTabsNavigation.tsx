import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const BottomTabsNavigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <Navigator
      tabBarPosition="bottom"
      initialRouteName="Home"
      screenOptions={{
        tabBarIndicator(props) {
          return null;
        },
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{backgroundColor: 'black', width: 50, height: 50}}>
                <Text>Home</Text>
              </View>
            );
          },
        }}
      />
      <Screen
        name="Detail"
        component={Detail}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{backgroundColor: 'black', width: 50, height: 50}}>
                <Text>Detail</Text>
              </View>
            );
          },
        }}
      />
    </Navigator>
  );
};

export default BottomTabsNavigation;

const styles = StyleSheet.create({});

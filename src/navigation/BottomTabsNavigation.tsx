import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Text from '../components/Text';
import {colors} from '../utils/colors';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const BottomTabsNavigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <Navigator
      tabBarPosition="bottom"
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: styles.container,
        tabBarContentContainerStyle: styles.tabBarContentContainer,
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
              <View style={styles.tabsContainer}>
                <Image
                  source={require('../assets/icons/discover.png')}
                  style={[
                    styles.icons,
                    {tintColor: focused ? colors.black : colors.gray},
                  ]}
                />
                <Text
                  style={[
                    styles.labelText,
                    {color: focused ? colors.black : colors.gray},
                  ]}
                  fontWeight="bold">
                  KEŞFET
                </Text>
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
              <View style={styles.tabsContainer}>
                <Image
                  source={require('../assets/icons/star.png')}
                  style={[
                    styles.icons,
                    {tintColor: focused ? colors.black : colors.gray},
                  ]}
                />
                <Text
                  style={[
                    styles.labelText,
                    {color: focused ? colors.black : colors.gray},
                  ]}
                  fontWeight="bold">
                  DAHA CÜZDAN
                </Text>
              </View>
            );
          },
        }}
      />
    </Navigator>
  );
};

export default BottomTabsNavigation;

const styles = StyleSheet.create({
  icons: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  tabsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    width: 100,
  },
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  labelText: {
    fontSize: 12,
    textAlign: 'center',
  },
  tabBarContentContainer: {
    height: 64,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});

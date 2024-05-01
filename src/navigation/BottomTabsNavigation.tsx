import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Text from '../components/Text';
import {colors} from '../utils/colors';
import Wallet from '../screens/Wallet';
import Daha from '../screens/Daha';

const Tab = createBottomTabNavigator();

const BottomTabsNavigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.container,
        tabBarItemStyle: {
          height: 72,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
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
          ),
        }}
      />
      <Tab.Screen
        name="Daha"
        component={Daha}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 84,
                height: 84,
                top: -20,
                backgroundColor: colors.white,
                borderRadius: 99,
              }}>
              <Image
                source={require('../assets/icons/dahaBorder.png')}
                style={{width: 84, height: 84}}
              />
              <Image
                source={require('../assets/icons/dahaLogo.png')}
                style={{width: 40, height: 40, position: 'absolute', top: 16}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({focused}) => (
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
          ),
        }}
      />
    </Tab.Navigator>
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
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 72,
    paddingHorizontal: 22,
  },
  labelText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

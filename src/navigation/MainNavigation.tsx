import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import SoldierNavigation from './home/SoldierNavigation';
import ReserveNaviation from './home/GeneralNavigation';
import GeneralNaviation from './home/GeneralNavigation';
import CartScreen from '../screens/cart/CartScreen';
import FrontsNavigation from './fronts/FrontsNavigation';

const Tab = createBottomTabNavigator<RootStackParamsList>();

function MainNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SoldierHome"
        component={SoldierNavigation}
        options={{
          title: '현 역',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={styles.image}
              source={
                focused
                  ? require('../../assets/star02.png')
                  : require('../../assets/star01.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="ReserveHome"
        component={ReserveNaviation}
        options={{
          title: '예비역',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={styles.image}
              source={
                focused
                  ? require('../../assets/dog-tag02.png')
                  : require('../../assets/dog-tag01.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="GeneralHome"
        component={GeneralNaviation}
        options={{
          title: '일 반',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={styles.image}
              source={
                focused
                  ? require('../../assets/general02.png')
                  : require('../../assets/general01.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: '전표확인',
          unmountOnBlur: true,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={styles.image}
              source={
                focused
                  ? require('../../assets/cart02.png')
                  : require('../../assets/cart01.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="FrontList"
        component={FrontsNavigation}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={styles.image}
              source={
                focused
                  ? require('../../assets/front02.png')
                  : require('../../assets/front01.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Styles
const styles = StyleSheet.create({
  image: {
    maxWidth: 20,
    maxHeight: 20,
  },
});

export default MainNavigation;

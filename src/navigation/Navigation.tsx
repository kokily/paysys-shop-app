import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LoginNavigation from './LoginNavigation';

function Navigation() {
  return (
    <NavigationContainer>
      <LoginNavigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default Navigation;

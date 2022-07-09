import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useUserState } from '../libs/context/UserContext';
import useAuthLoadEffect from '../libs/hooks/auth/useAuthLoadEffect';
import LoginNavigation from './LoginNavigation';
import MainNavigation from './MainNavigation';

function Navigation() {
  useAuthLoadEffect();
  const [user] = useUserState();

  return (
    <NavigationContainer>
      {user ? <MainNavigation /> : <LoginNavigation />}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default Navigation;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function LoginNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '행사전표시스템 로그인',
          headerTitleStyle: styles.title,
        }}
      />
    </Stack.Navigator>
  );
}

// Styles
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: '#4d88cf',
  },
});

export default LoginNavigation;

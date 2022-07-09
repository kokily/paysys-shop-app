import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReserveScreen from '../../screens/home/ReserveScreen';
import MenuDetailScreen from '../../screens/menu/MenuDetailScreen';
import ReserveListScreen from '../../screens/menu/ReserveListScreen';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function ReserveNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="ReserveHome"
          component={ReserveScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReserveList"
          component={ReserveListScreen}
          options={{ title: '이전으로' }}
        />
        <Stack.Screen
          name="Detail"
          component={MenuDetailScreen}
          options={{ title: '이전으로' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ReserveNavigation;

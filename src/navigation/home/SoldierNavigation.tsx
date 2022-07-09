import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SoldierScreen from '../../screens/home/SoldierScreen';
import MenuDetailScreen from '../../screens/menu/MenuDetailScreen';
import SoldierListScreen from '../../screens/menu/SoldierListScreen';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function SoldierNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="SoldierHome"
          component={SoldierScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SoldierList"
          component={SoldierListScreen}
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

export default SoldierNavigation;

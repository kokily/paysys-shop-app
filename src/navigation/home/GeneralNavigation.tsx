import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GeneralScreen from '../../screens/home/GeneralScreen';
import MenuDetailScreen from '../../screens/menu/MenuDetailScreen';
import GeneralListScreen from '../../screens/menu/GeneralListScreen';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function GeneralNaviation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="GeneralHome"
          component={GeneralScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GeneralList"
          component={GeneralListScreen}
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

export default GeneralNaviation;

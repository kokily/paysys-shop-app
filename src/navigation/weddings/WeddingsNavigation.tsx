import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddWeddingScreen from '../../screens/weddings/AddWeddingScreen';
import ListWeddingsScreen from '../../screens/weddings/ListWeddingsScreen';
import ReadWeddingScreen from '../../screens/weddings/ReadWeddingScreen';
import UpdateWeddingScreen from '../../screens/weddings/UpdateWeddingScreen';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function WeddingsNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="ListWeddings"
          component={ListWeddingsScreen}
          options={{ title: '웨딩전표 목록' }}
        />
        <Stack.Screen
          name="ReadWedding"
          component={ReadWeddingScreen}
          options={{ title: '웨딩 세부보기' }}
        />
        <Stack.Screen
          name="AddExpense"
          component={AddWeddingScreen}
          options={{ title: '웨딩 추가' }}
        />
        <Stack.Screen
          name="UpdateExpense"
          component={UpdateWeddingScreen}
          options={{ title: '웨딩전표 수정' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default WeddingsNavigation;

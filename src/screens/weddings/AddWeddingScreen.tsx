import { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import Expense from '../../components/expense/Expense';
import useExpense from '../../libs/hooks/expense/useExpense';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
  route: RouteProp<RootStackParamsList>;
}

function AddWeddingScreen({ navigation, route }: Props) {
  const expense = useExpense({ navigation, route });

  return <Expense expense={expense} />;
}

export default AddWeddingScreen;

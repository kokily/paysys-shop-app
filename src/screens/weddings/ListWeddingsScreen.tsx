import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import ListWeddings from '../../components/weddings/list/ListWeddings';
import useListWeddings from '../../libs/hooks/weddings/useListWeddings';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function ListWeddingsScreen({ navigation }: Props) {
  const { onAddExpense } = useListWeddings({ navigation });

  return <ListWeddings onAddExpense={onAddExpense} navigation={navigation} />;
}

export default ListWeddingsScreen;

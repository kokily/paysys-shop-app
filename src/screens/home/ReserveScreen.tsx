import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import ReserveHome from '../../components/home/ReserveHome';
import useHome from '../../libs/hooks/home/useHome';

interface Props {
  navigation: NativeStackNavigationProp<
    RootStackParamsList,
    'ReserveHome' | 'ReserveList'
  >;
}

function ReserveScreen({ navigation }: Props) {
  const { menu, onReserveList } = useHome({ navigation });

  return <ReserveHome menu={menu} onReserveList={onReserveList} />;
}

export default ReserveScreen;

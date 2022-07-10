import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import SoldierHome from '../../components/home/SoldierHome';
import useHome from '../../libs/hooks/home/useHome';

interface Props {
  navigation: NativeStackNavigationProp<
    RootStackParamsList,
    'SoldierHome' | 'SoldierList'
  >;
}

function SoldierScreen({ navigation }: Props) {
  const { menu, onSoldierList } = useHome({ navigation });

  return <SoldierHome menu={menu} onSoldierList={onSoldierList} />;
}

export default SoldierScreen;

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import React from 'react';
import useListMenu from '../../libs/hooks/menu/useListMenu';
import Loading from '../../components/common/Loading';
import SoldierList from '../../components/menu/list/SoldierList';

interface Props {
  navigation: NativeStackNavigationProp<
    RootStackParamsList,
    'SoldierList' | 'ReserveList' | 'GeneralList'
  >;
  route: RouteProp<
    RootStackParamsList,
    'SoldierList' | 'ReserveList' | 'GeneralList'
  >;
}

function SoldierListScreen({ navigation, route }: Props) {
  const { menu, loading, divide, onDetailMenu } = useListMenu({
    navigation,
    route,
  });

  if (loading) return <Loading />;

  return (
    <SoldierList
      menu={menu || []}
      divide={divide}
      onDetailMenu={onDetailMenu}
    />
  );
}

export default SoldierListScreen;

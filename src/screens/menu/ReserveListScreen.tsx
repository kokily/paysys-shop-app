import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import React from 'react';
import useListMenu from '../../libs/hooks/menu/useListMenu';
import Loading from '../../components/common/Loading';
import ReserveList from '../../components/menu/list/ReserveList';

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

function ReserveListScreen({ navigation, route }: Props) {
  const { menu, loading, divide, onDetailMenu } = useListMenu({
    navigation,
    route,
  });

  if (loading) return <Loading />;

  return (
    <ReserveList
      menu={menu || []}
      divide={divide}
      onDetailMenu={onDetailMenu}
    />
  );
}

export default ReserveListScreen;

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import React from 'react';
import useListMenu from '../../libs/hooks/menu/useListMenu';
import Loading from '../../components/common/Loading';
import GeneralList from '../../components/menu/list/GeneralList';

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

function GeneralListScreen({ navigation, route }: Props) {
  const { menu, loading, divide, onDetailMenu } = useListMenu({
    navigation,
    route,
  });

  if (loading) return <Loading />;

  return (
    <GeneralList
      menu={menu || []}
      divide={divide}
      onDetailMenu={onDetailMenu}
    />
  );
}

export default GeneralListScreen;

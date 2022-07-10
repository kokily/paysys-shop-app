import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { useQuery } from 'react-query';
import { listMenuAPI } from '../../api/menu';

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

function useListMenu({ navigation, route }: Props) {
  const { native, divide }: any = route.params;
  const { data: menu, isFetching: loading } = useQuery(
    'listMenu',
    () => listMenuAPI({ native, divide }),
    {
      enabled: true,
    }
  );

  const onDetailMenu = (id: string) => {
    navigation.navigate('Detail', { id });
  };

  return {
    menu,
    loading,
    divide,
    onDetailMenu,
  };
}

export default useListMenu;

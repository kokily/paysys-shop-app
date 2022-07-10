import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import React from 'react';
import Loading from '../../components/common/Loading';
import DetailMenu from '../../components/menu/detail/DetailMenu';
import useDetailMenu from '../../libs/hooks/menu/useDetailMenu';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
  route: RouteProp<RootStackParamsList>;
}

function MenuDetailScreen({ navigation, route }: Props) {
  const { menu, loading, price, setPrice, count, setCount, onAddCart, onBack } =
    useDetailMenu({ navigation, route });

  if (loading) return <Loading />;

  return (
    <DetailMenu
      menu={menu}
      price={price}
      setPrice={setPrice}
      count={count}
      setCount={setCount}
      onAddCart={onAddCart}
      onBack={onBack}
    />
  );
}

export default MenuDetailScreen;

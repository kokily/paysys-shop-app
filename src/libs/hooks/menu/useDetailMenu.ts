import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { readMenuAPI } from '../../api/menu';
import { Alert } from 'react-native';
import { addCartAPI } from '../../api/cart';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
  route: RouteProp<RootStackParamsList>;
}

function useDetailMenu({ navigation, route }: Props) {
  const queryClient = useQueryClient();
  const { id }: any = route.params;
  const { data: menu, isFetching: loading } = useQuery(
    'detailMenu',
    () => readMenuAPI(id),
    {
      onSuccess: (data) => {
        if (data.price !== 0) {
          setPrice(data.price.toString());
        }
      },
      enabled: true,
    }
  );
  const [price, setPrice] = useState('');
  const [count, setCount] = useState('');
  const addCartMutate = useMutation(addCartAPI);

  const onAddCart = async () => {
    if (
      count === '' ||
      price === '' ||
      parseInt(count) < 1 ||
      parseInt(price) < 1
    ) {
      Alert.alert('단가 수량을 입력하세요');
      return;
    }

    try {
      await addCartMutate.mutateAsync({
        item_id: id,
        count: parseInt(count),
        price: parseInt(price),
      });
      navigation.goBack();
    } catch (err: any) {
      Alert.alert(err);
    }
  };

  const onBack = () => {
    queryClient.invalidateQueries('detailMenu');
    navigation.goBack();
  };

  return {
    menu,
    loading,
    price,
    setPrice,
    count,
    setCount,
    onAddCart,
    onBack,
  };
}

export default useDetailMenu;

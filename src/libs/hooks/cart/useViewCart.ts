import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addBillAPI } from '../../api/bills';
import { removeCartAPI, removeOneCartAPI, viewCartAPI } from '../../api/cart';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function useViewCart({ navigation }: Props) {
  const queryClient = useQueryClient();
  const {
    data: cart,
    isFetching: loading,
    refetch,
  } = useQuery('cart', () => viewCartAPI(), {
    onSuccess: (data) => {
      let total = 0;
      let list = data.items;

      if (list) {
        for (let key in list) {
          total += list[key].amount;
        }
      }

      setTotalAmount(total);
    },
    enabled: true,
  });
  const [title, setTitle] = useState('');
  const [hall, setHall] = useState('');
  const [etc, setEtc] = useState(' ');
  const [totalAmount, setTotalAmount] = useState(0);
  const addBillMutate = useMutation(addBillAPI);
  const removeCartMutate = useMutation(removeCartAPI);
  const removeOneCartMutate = useMutation(removeOneCartAPI);

  const onAddBill = async () => {
    if ([title, hall, etc].includes('')) {
      Alert.alert('빈 칸 없이 입력해주세요');
      return;
    }

    try {
      await addBillMutate.mutateAsync({ title, hall, etc });
      await Alert.alert('전표 전송!');
      await removeCartMutate.mutateAsync();
      await queryClient.invalidateQueries(['cart', 'listFronts']);
      navigation.navigate('FrontList');
    } catch (err: any) {
      Alert.alert(err);
    }
  };

  const onRemoveCart = async () => {
    try {
      Alert.alert('경고!', '품목이 전부 삭제됩니다', [
        { text: '취소', onPress: () => console.log('cancel') },
        {
          text: '삭제',
          onPress: async () => {
            await removeCartMutate.mutateAsync();
            await queryClient.invalidateQueries('cart');
            await refetch();
          },
        },
      ]);
    } catch (err: any) {
      Alert.alert(err);
    }
  };

  const onRemoveOneCart = async (id: string, name: string) => {
    try {
      Alert.alert('경고!', `${name} 품목을 삭제합니다`, [
        { text: '취소', onPress: () => console.log('cancel') },
        {
          text: '삭제',
          onPress: async () => {
            await removeOneCartMutate.mutateAsync(id);
            await queryClient.invalidateQueries('cart');
            await refetch();
          },
        },
      ]);
    } catch (err: any) {
      Alert.alert(err);
    }
  };

  return {
    cart,
    loading,
    title,
    setTitle,
    hall,
    setHall,
    etc,
    setEtc,
    totalAmount,
    onAddBill,
    onRemoveCart,
    onRemoveOneCart,
  };
}

export default useViewCart;

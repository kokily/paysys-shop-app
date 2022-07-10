import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { readBillAPI, removeBillAPI, restoreBillAPI } from '../../api/bills';
import { useUserState } from '../../context/UserContext';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
  route: RouteProp<RootStackParamsList>;
}

function useReadFront({ navigation, route }: Props) {
  const queryClient = useQueryClient();
  const { id }: any = route.params;
  const { data: front, isFetching: loading } = useQuery(
    'readFront',
    () => readBillAPI(id),
    {
      enabled: true,
    }
  );
  const [user] = useUserState();
  const removeBillMutate = useMutation(removeBillAPI);
  const restoreBillMutate = useMutation(restoreBillAPI);

  const onRemoveBill = async () => {
    try {
      Alert.alert('경고!', '전표가 삭제됩니다', [
        {
          text: '취소',
          onPress: () => {
            return;
          },
        },
        {
          text: '네!',
          onPress: async () => {
            await removeBillMutate.mutateAsync(id);
            await Alert.alert('삭제 완료!');
            await queryClient.clear();
            navigation.goBack();
          },
        },
      ]);
    } catch (err: any) {
      Alert.alert(err);
    }
  };

  const onRestoreBill = async () => {
    try {
      Alert.alert('경고!', '전표 삭제 후 목록으로 이동합니다', [
        {
          text: '취소',
          onPress: () => {
            return;
          },
        },
        {
          text: '네!',
          onPress: async () => {
            await restoreBillMutate.mutateAsync(id);
            await Alert.alert('목록 이동!');
            await queryClient.clear();
            navigation.navigate('Cart');
          },
        },
      ]);
    } catch (err: any) {
      Alert.alert(err);
    }
  };

  return {
    front,
    user,
    loading,
    onRemoveBill,
    onRestoreBill,
  };
}

export default useReadFront;

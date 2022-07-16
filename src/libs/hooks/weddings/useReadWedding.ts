import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { removeExpenseAPI } from '../../api/expense';
import { readWeddingAPI } from '../../api/weddings';
import { useUserState } from '../../context/UserContext';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
  route: RouteProp<RootStackParamsList>;
}

function useReadWedding({ navigation, route }: Props) {
  const [user] = useUserState();
  const queryClient = useQueryClient();
  const { id }: any = route.params;
  const [husbandCost, setHusbandCost] = useState(0);
  const [brideCost, setBrideCost] = useState(0);
  const [allCost, setAllCost] = useState(0);
  const { data: wedding, isFetching: loading } = useQuery(
    'readWedding',
    () => readWeddingAPI(id),
    {
      enabled: true,
      onSuccess: (data) => {
        const husband =
          data.convention.glove_husband +
          data.convention.sword_husband +
          data.convention.rental_husband +
          data.convention.bouquet_husband +
          data.convention.ceremony_husband +
          data.company.etc_husband +
          data.company.wig_husband +
          data.company.dress_husband +
          data.company.frame_husband +
          data.company.video_husband +
          data.company.select_husband +
          data.company.company_husband +
          data.company.rooftop_husband +
          data.company.hairpin_husband +
          data.company.owner_man_husband +
          data.company.owner_woman_husband +
          data.event.play_husband +
          data.event.anthem_husband +
          data.event.moderator_husband +
          data.event.officiate_husband +
          data.hanbok.hanbok_pre_husband +
          data.hanbok.hanbok_post_husband;

        const bride =
          data.convention.glove_bride +
          data.convention.sword_bride +
          data.convention.rental_bride +
          data.convention.bouquet_bride +
          data.convention.ceremony_bride +
          data.company.etc_bride +
          data.company.wig_bride +
          data.company.dress_bride +
          data.company.frame_bride +
          data.company.video_bride +
          data.company.select_bride +
          data.company.company_bride +
          data.company.rooftop_bride +
          data.company.hairpin_bride +
          data.company.owner_man_bride +
          data.company.owner_woman_bride +
          data.event.play_bride +
          data.event.anthem_bride +
          data.event.moderator_bride +
          data.event.officiate_bride +
          data.hanbok.hanbok_pre_bride +
          data.hanbok.hanbok_post_bride;

        setHusbandCost(husband);
        setBrideCost(bride);
        setAllCost(husband + bride);
      },
    }
  );
  const removeWeddingMutate = useMutation(removeExpenseAPI);

  const onUpdateWedding = () => {
    navigation.navigate('UpdateWedding', { id });
  };

  const onRemoveWedding = async () => {
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
            await removeWeddingMutate.mutateAsync(id);
            await Alert.alert('삭제 완료');
            await queryClient.clear();
            navigation.goBack();
          },
        },
      ]);
    } catch (err: any) {
      Alert.alert(err);
    }
  };

  useEffect(() => {
    if (user && !user.admin) {
      navigation.navigate('SoldierHome');
    }
  }, [user]);

  return {
    wedding,
    loading,
    onUpdateWedding,
    onRemoveWedding,
    husbandCost,
    brideCost,
    allCost,
  };
}

export default useReadWedding;

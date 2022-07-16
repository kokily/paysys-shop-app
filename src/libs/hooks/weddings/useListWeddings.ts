import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';
import { listWeddingsAPI } from '../../api/weddings';
import { useUserState } from '../../context/UserContext';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function useListWeddings({ navigation }: Props) {
  const [user] = useUserState();
  const { data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery(
    'listWeddings',
    ({ pageParam }) => listWeddingsAPI({ cursor: pageParam }),
    {
      enabled: true,
      getNextPageParam: (data) =>
        data && data.length === 40 ? data[data.length - 1].id : undefined,
    }
  );

  const weddings = useMemo(() => {
    if (!data) {
      return [];
    }

    return ([] as WeddingType[]).concat(...data.pages);
  }, [data]);

  const onAddExpense = () => {
    navigation.navigate('AddWedding');
  };

  const onDetailWedding = (id: string) => {
    navigation.navigate('ReadWedding', { id });
  };

  useEffect(() => {
    if (user && !user.admin) {
      navigation.navigate('SoldierHome');
    }
  }, [user]);

  return {
    weddings,
    isFetchingNextPage,
    fetchNextPage,
    onAddExpense,
    onDetailWedding,
  };
}

export default useListWeddings;

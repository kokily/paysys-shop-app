import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMemo, useState } from 'react';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { listBillsAPI } from '../../api/bills';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function useListFronts({ navigation }: Props) {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState('');
  const { data, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery(
    'listFronts',
    ({ pageParam }) => listBillsAPI({ cursor: pageParam, title: search }),
    {
      getNextPageParam: (data) =>
        data && data.length === 30 ? data[data.length - 1].id : undefined,
      enabled: true,
    }
  );

  const fronts = useMemo(() => {
    if (!data) {
      return [];
    }

    return ([] as BillType[]).concat(...data.pages);
  }, [data]);

  const onSearch = async () => {
    await queryClient.clear();
    await refetch();
  };

  const onDetailFront = (id: string) => {
    navigation.navigate('FrontRead', { id });
  };

  return {
    fronts,
    isFetchingNextPage,
    fetchNextPage,
    search,
    setSearch,
    onSearch,
    onDetailFront,
  };
}

export default useListFronts;

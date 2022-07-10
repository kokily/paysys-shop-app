import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import useListFronts from '../../../libs/hooks/fronts/useListFronts';
import Loading from '../../common/Loading';
import ListFrontsItem from './ListFrontsItem';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function ListFrontsList({ navigation }: Props) {
  const {
    fronts,
    isFetchingNextPage: loading,
    onDetailFront,
    fetchNextPage,
  } = useListFronts({ navigation });

  const renderItem = ({ item }: { item: BillType }) => (
    <ListFrontsItem front={item} onDetailFront={onDetailFront} />
  );

  const memoziedItem = useMemo(() => renderItem, [fronts]);

  return (
    <FlatList
      data={fronts}
      renderItem={memoziedItem}
      keyExtractor={(item, i) => item.id + 1}
      ListFooterComponent={loading ? <Loading /> : null}
      disableVirtualization={false}
      onEndReached={() => fetchNextPage()}
      onEndReachedThreshold={1}
    />
  );
}

export default ListFrontsList;

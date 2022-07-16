import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import useListWeddings from '../../../libs/hooks/weddings/useListWeddings';
import Loading from '../../common/Loading';
import ListWeddingsItem from './ListWeddingsItem';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function ListWeddingsList({ navigation }: Props) {
  const {
    weddings,
    isFetchingNextPage: loading,
    onDetailWedding,
    fetchNextPage,
  } = useListWeddings({ navigation });

  const renderItem = ({ item }: { item: WeddingType }) => (
    <ListWeddingsItem wedding={item} onDetailWedding={onDetailWedding} />
  );

  const memoziedItem = useMemo(() => renderItem, [weddings]);

  return (
    <FlatList
      data={weddings}
      renderItem={memoziedItem}
      keyExtractor={(item, i) => item.id + 1}
      ListFooterComponent={loading ? <Loading /> : null}
      disableVirtualization={false}
      onEndReached={() => fetchNextPage()}
      onEndReachedThreshold={1}
    />
  );
}

export default ListWeddingsList;

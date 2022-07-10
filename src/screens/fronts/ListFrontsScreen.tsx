import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import ListFronts from '../../components/fronts/list/ListFronts';
import useListFronts from '../../libs/hooks/fronts/useListFronts';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function ListFrontsScreen({ navigation }: Props) {
  const { search, setSearch, onSearch } = useListFronts({ navigation });

  return (
    <ListFronts
      search={search}
      setSearch={setSearch}
      onSearch={onSearch}
      navigation={navigation}
    />
  );
}

export default ListFrontsScreen;

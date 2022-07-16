import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import React from 'react';
import Loading from '../../components/common/Loading';
import useReadWedding from '../../libs/hooks/weddings/useReadWedding';
import ReadWedding from '../../components/weddings/read/ReadWedding';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
  route: RouteProp<RootStackParamsList>;
}

function ReadWeddingScreen({ navigation, route }: Props) {
  const {
    wedding,
    loading,
    onUpdateWedding,
    onRemoveWedding,
    husbandCost,
    brideCost,
    allCost,
  } = useReadWedding({ navigation, route });

  if (loading) return <Loading />;

  return (
    <ReadWedding
      wedding={wedding}
      onUpdateWedding={onUpdateWedding}
      onRemoveWedding={onRemoveWedding}
      husbandCost={husbandCost}
      brideCost={brideCost}
      allCost={allCost}
    />
  );
}

export default ReadWeddingScreen;

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import React from 'react';
import Loading from '../../components/common/Loading';
import ReadFront from '../../components/fronts/read/ReadFront';
import useReadFront from '../../libs/hooks/fronts/useReadFront';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
  route: RouteProp<RootStackParamsList>;
}

function ReadFrontScreen({ navigation, route }: Props) {
  const { front, user, loading, onRemoveBill, onRestoreBill } = useReadFront({
    navigation,
    route,
  });

  if (loading) return <Loading />;

  return (
    <ReadFront
      front={front}
      user={user}
      onRemoveBill={onRemoveBill}
      onRestoreBill={onRestoreBill}
    />
  );
}

export default ReadFrontScreen;

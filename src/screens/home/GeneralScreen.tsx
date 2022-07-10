import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import GeneralHome from '../../components/home/GeneralHome';
import useHome from '../../libs/hooks/home/useHome';

interface Props {
  navigation: NativeStackNavigationProp<
    RootStackParamsList,
    'GeneralHome' | 'GeneralList'
  >;
}

function GeneralScreen({ navigation }: Props) {
  const { menu, onGeneralList } = useHome({ navigation });

  return <GeneralHome menu={menu} onGeneralList={onGeneralList} />;
}

export default GeneralScreen;

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import AppTemplate from '../components/common/AppTemplate';
import Welcome from '../components/welcome/Welcome';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function WelcomeScreen({ navigation }: Props) {
  return (
    <AppTemplate>
      <Welcome navigation={navigation} />
    </AppTemplate>
  );
}

export default WelcomeScreen;

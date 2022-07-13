import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import ChangePassword from '../../components/users/ChangePassword';
import useChangePassword from '../../libs/hooks/users/useChangePassword';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function PasswordScreen({ navigation }: Props) {
  const { password, setPassword, onChangePassword } = useChangePassword({
    navigation,
  });

  return (
    <ChangePassword
      password={password}
      setPassword={setPassword}
      onChangePassword={onChangePassword}
    />
  );
}

export default PasswordScreen;

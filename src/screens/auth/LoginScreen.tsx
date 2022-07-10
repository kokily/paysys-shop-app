import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../../components/auth/Login';
import useLogin from '../../libs/hooks/auth/useLogin';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function LoginScreen({ navigation }: Props) {
  const { username, password, setUsername, setPassword, onLogin } = useLogin({
    navigation,
  });

  return (
    <Login
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      onLogin={onLogin}
    />
  );
}

export default LoginScreen;

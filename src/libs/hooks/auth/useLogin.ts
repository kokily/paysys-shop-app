import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { loginAPI, logoutAPI } from '../../api/auth';
import { useUserState } from '../../context/UserContext';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function useLogin({ navigation }: Props) {
  const [, setUser] = useUserState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const loginMutate = useMutation(loginAPI);
  const logoutMutate = useMutation(logoutAPI);

  const onLogin = async () => {
    if ([username, password].includes('')) {
      alert('빈 칸 없이 입력해 주세요');
      return;
    }

    try {
      const response = await loginMutate.mutateAsync({ username, password });

      setUser(response);
      navigation.push('SoldierHome');
    } catch (err: any) {
      setError(err);
    }
  };

  return {
    username,
    password,
    setUsername,
    setPassword,
    onLogin,
    error,
  };
}

export default useLogin;

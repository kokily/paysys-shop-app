import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useMutation } from 'react-query';
import { changePasswordAPI } from '../../api/users';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function useChangePassword({ navigation }: Props) {
  const [password, setPassword] = useState('');
  const changePasswordMutate = useMutation(changePasswordAPI);

  const onChangePassword = async () => {
    if ([password].includes('')) {
      Alert.alert('비밀번호를 먼저 입력하세요');
      return;
    }

    if (password.length < 4) {
      Alert.alert('비밀번호는 4자리 이상입니다');
      setPassword('');
      return;
    }

    try {
      await changePasswordMutate.mutateAsync(password);
      navigation.navigate('SoldierHome');
    } catch (err: any) {
      Alert.alert(err);
    }
  };

  return {
    password,
    setPassword,
    onChangePassword,
  };
}

export default useChangePassword;

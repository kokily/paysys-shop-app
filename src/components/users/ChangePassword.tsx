import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Input } from 'react-native-elements';
import AppTemplate from '../common/AppTemplate';

interface Props {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  onChangePassword: () => void;
}

function ChangePassword({ password, setPassword, onChangePassword }: Props) {
  return (
    <AppTemplate>
      <Card>
        <Card.Title style={styles.title}>비밀번호 변경</Card.Title>

        <Card.Divider />

        <Input
          textContentType="password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          placeholder="비밀번호"
          autoCompleteType={false}
        />

        <Card.Divider />

        <Button title="변경하기" onPress={onChangePassword} />
      </Card>
    </AppTemplate>
  );
}

// Styles
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: '#004edf',
  },
});

export default ChangePassword;

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function Copyright({ navigation }: Props) {
  return (
    <>
      <View>
        <Text h4 h4Style={styles.copyright}>
          관리자: hkkokily5@gmail.com
        </Text>
      </View>
      <Button title="로그인하기" onPress={() => navigation.navigate('Login')} />
    </>
  );
}

// Styles
const styles = StyleSheet.create({
  copyright: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
});

export default Copyright;

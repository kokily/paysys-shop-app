import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

interface Props {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  hall: string;
  setHall: Dispatch<SetStateAction<string>>;
  etc: string;
  setEtc: Dispatch<SetStateAction<string>>;
}

function CartInputs({ title, setTitle, hall, setHall, etc, setEtc }: Props) {
  return (
    <View style={styles.container}>
      <Input
        placeholder="행사명(*)"
        autoCapitalize="none"
        autoCompleteType="off"
        value={title}
        onChangeText={setTitle}
      />
      <Input
        placeholder="행사홀(*)"
        autoCapitalize="none"
        autoCompleteType="off"
        value={hall}
        onChangeText={setHall}
      />
      <Input
        placeholder="기타사항"
        autoCapitalize="none"
        autoCompleteType="off"
        value={etc}
        onChangeText={setEtc}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});

export default CartInputs;

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Amount } from '../../libs/utils';

interface Props {
  total: number;
}

function CartTotal({ total }: Props) {
  return (
    <View>
      <Text style={styles.total}>예상 결제금액 : {total && Amount(total)}</Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  total: {
    fontSize: 23,
    fontWeight: '600',
    color: 'red',
    textAlign: 'right',
    marginTop: 15,
    marginRight: 15,
  },
});

export default CartTotal;

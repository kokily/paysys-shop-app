import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Amount } from '../../../libs/utils';

interface Props {
  total: number;
}

function ReadTotal({ total }: Props) {
  return (
    <View>
      <Text style={styles.amount}>결제금액: {Amount(total)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  amount: {
    textAlign: 'right',
    fontSize: 23,
    fontWeight: '600',
    color: '#364fc7',
    marginTop: 15,
    marginRight: 15,
  },
});

export default ReadTotal;

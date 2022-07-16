import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { AddExpensePayload } from '../../libs/types';
import AppTemplate from '../common/AppTemplate';

interface Props {
  edit?: boolean;
  expense: AddExpensePayload;
}

function Expense({ edit, expense }: Props) {
  return (
    <AppTemplate>
      <Text h4 h4Style={styles.title}>
        웨딩 정산 {edit ? '수정' : '작성'}
      </Text>
    </AppTemplate>
  );
}

// Styles
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default Expense;

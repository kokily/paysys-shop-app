import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

interface Props {
  onAddBill: () => void;
  onRemoveCart: () => void;
}

function CartButtons({ onAddBill, onRemoveCart }: Props) {
  return (
    <View style={styles.container}>
      <Button
        title="전체삭제"
        type="outline"
        titleStyle={styles.removeTitle}
        style={styles.removeButton}
        containerStyle={{ marginRight: 5 }}
        onPress={onRemoveCart}
      />
      <Button
        title="전송하기"
        type="outline"
        titleStyle={styles.addTitle}
        style={styles.addButton}
        onPress={onAddBill}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  removeTitle: {
    color: 'red',
  },
  removeButton: {
    borderColor: 'red',
    maxWidth: 120,
  },
  addTitle: {
    color: 'blue',
  },
  addButton: {
    borderColor: 'blue',
    maxWidth: 120,
  },
});

export default CartButtons;

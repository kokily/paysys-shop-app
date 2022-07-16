import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

interface Props {
  onRemoveWedding: () => void;
  onUpdateWedding: () => void;
}

function ReadWeddingButtons({ onRemoveWedding, onUpdateWedding }: Props) {
  return (
    <View style={styles.container}>
      <Button
        title="삭 제"
        type="solid"
        buttonStyle={[styles.button, styles.remove]}
        titleStyle={styles.remove}
        onPress={onRemoveWedding}
      />
      <Button
        title="수 정"
        type="solid"
        buttonStyle={[styles.button, styles.update]}
        titleStyle={styles.update}
        onPress={onUpdateWedding}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  button: {
    width: 120,
    marginRight: 10,
    fontWeight: '600',
  },
  remove: {
    color: 'white',
    borderColor: 'red',
    backgroundColor: 'red',
  },
  update: {
    color: 'white',
    borderColor: '#00a0a0',
    backgroundColor: '#00a0a0',
  },
});

export default ReadWeddingButtons;

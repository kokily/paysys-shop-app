import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';

interface Props {
  wedding: WeddingType;
  onDetailWedding: (id: string) => void;
}

function ListWeddingsItem({ wedding, onDetailWedding }: Props) {
  return (
    <Row style={styles.container} onPress={() => onDetailWedding(wedding.id)}>
      <Col size={30}>
        <Text style={styles.weddingText}>{wedding.wedding_at}</Text>
      </Col>
      <Col size={20}>
        <Text style={styles.weddingText}>{wedding.event_at}</Text>
      </Col>
      <Col size={25}>
        <Text style={styles.weddingText}>{wedding.husband_name}</Text>
      </Col>
      <Col size={25}>
        <Text style={styles.weddingText}>{wedding.bride_name}</Text>
      </Col>
    </Row>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  weddingText: {
    fontSize: 16,
    color: '#3E98AD',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default ListWeddingsItem;

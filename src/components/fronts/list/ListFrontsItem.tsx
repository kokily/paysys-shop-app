import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';

interface Props {
  front: BillType;
  onDetailFront: (id: string) => void;
}

function ListFrontsItem({ front, onDetailFront }: Props) {
  return (
    <Row style={styles.container} onPress={() => onDetailFront(front.id)}>
      <Col size={20}>
        <Text style={styles.frontText}>
          {new Date(front.created_at).toLocaleDateString('ko-KR')}
        </Text>
      </Col>
      <Col size={40}>
        <Text style={styles.frontText}>
          {front.title.length > 11
            ? `${front.title.slice(0, 11)}...`
            : front.title}
        </Text>
      </Col>
      <Col size={20}>
        <Text style={styles.frontText}>{front.hall}</Text>
      </Col>
      <Col size={20}>
        <Text style={styles.frontText}>{front.username}</Text>
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
  frontText: {
    fontSize: 16,
    color: '#3E98AD',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default ListFrontsItem;

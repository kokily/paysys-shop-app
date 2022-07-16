import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';
import { Amount } from '../../../../libs/utils';

interface Props {
  title: string;
  husband: number;
  bride: number;
  sum: number;
}

function WeddingTopAllCost({ title, husband, bride, sum }: Props) {
  return (
    <Row style={styles.container}>
      <Col size={25}>
        <Text style={styles.header}>{title}</Text>
      </Col>
      <Col size={25}>
        <Text style={styles.content}>{Amount(husband)}</Text>
      </Col>
      <Col size={25}>
        <Text style={styles.content}>{Amount(bride)}</Text>
      </Col>
      <Col size={25}>
        <Text style={[styles.content, styles.sum]}>{Amount(sum)}</Text>
      </Col>
    </Row>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 15,
    fontWeight: '600',
    paddingVertical: 5,
    textAlign: 'center',
    color: '#d941c5',
  },
  content: {
    fontSize: 15,
    fontWeight: '600',
    paddingVertical: 5,
    textAlign: 'right',
  },
  sum: {
    color: '#4455aa',
  },
});

export default WeddingTopAllCost;

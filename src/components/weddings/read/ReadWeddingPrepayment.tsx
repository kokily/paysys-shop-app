import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';
import { Amount } from '../../../libs/utils';

interface Props {
  prepayment: PrepaymentType;
}

function ReadWeddingPrepayment({ prepayment }: Props) {
  return (
    <Grid style={styles.container}>
      <Row style={styles.header}>
        <Col size={25}>
          <Text style={styles.headerText}>구 분</Text>
        </Col>
        <Col size={25}>
          <Text style={styles.headerText}>신 랑</Text>
        </Col>
        <Col size={25}>
          <Text style={styles.headerText}>신 부</Text>
        </Col>
        <Col size={25}>
          <Text style={styles.headerText}>계</Text>
        </Col>
      </Row>

      <Row style={styles.content}>
        <Col size={25}>
          <Text style={styles.headerText}>선결제</Text>
        </Col>
        <Col size={25}>
          <Text style={styles.contentText}>
            {Amount(prepayment.prepayment_husband)}
          </Text>
        </Col>
        <Col size={25}>
          <Text style={styles.contentText}>
            {Amount(prepayment.prepayment_bride)}
          </Text>
        </Col>
        <Col size={25}>
          <Text style={styles.contentText}>
            {Amount(
              prepayment.prepayment_husband + prepayment.prepayment_bride
            )}
          </Text>
        </Col>
      </Row>
    </Grid>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  header: {
    backgroundColor: '#adb5dd',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
  },
  headerText: {
    textAlign: 'center',
    color: '#4455aa',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 6,
  },
  sum: {
    color: '#4455aa',
  },
});

export default ReadWeddingPrepayment;

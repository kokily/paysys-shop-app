import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';

interface Props {
  front: BillType;
}

function ReadFrontTop({ front }: Props) {
  return (
    <Grid style={styles.container}>
      <Row>
        <Col size={40} style={styles.header}>
          <Text style={styles.headerText}>작성자</Text>
        </Col>
        <Col size={60} style={styles.content}>
          <Text style={styles.contentText}>{front.username}</Text>
        </Col>
      </Row>

      <Row>
        <Col size={40} style={styles.header}>
          <Text style={styles.headerText}>작성일자</Text>
        </Col>
        <Col size={60} style={styles.content}>
          <Text style={styles.contentText}>
            {new Date(front.created_at).toLocaleDateString('ko-KR')}
          </Text>
        </Col>
      </Row>

      <Row>
        <Col size={40} style={styles.header}>
          <Text style={styles.headerText}>행사장소</Text>
        </Col>
        <Col size={60} style={styles.content}>
          <Text style={styles.contentText}>{front.hall}</Text>
        </Col>
      </Row>
    </Grid>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    backgroundColor: '#4056c3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ReadFrontTop;

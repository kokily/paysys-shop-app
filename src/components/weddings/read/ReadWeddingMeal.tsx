import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';
import { Amount } from '../../../libs/utils';

interface Props {
  meal: MealType;
}

function ReadWeddingMeal({ meal }: Props) {
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
          <Text style={styles.headerText}>식대분할</Text>
        </Col>
        <Col size={75}>
          <Text style={styles.contentText}>
            {(function () {
              if (meal.meals === 'privacy') {
                return '각각 결제';
              } else if (meal.meals === 'husband') {
                return '신랑 결제';
              } else if (meal.meals === 'bride') {
                return '신부 결제';
              } else {
                return '반반 결제';
              }
            })()}
          </Text>
        </Col>
      </Row>

      <Row style={styles.content}>
        <Col size={25}>
          <Text style={styles.headerText}>식대단가</Text>
        </Col>
        <Col size={75}>
          <Text style={styles.contentText}>{Amount(meal.meals_price)}</Text>
        </Col>
      </Row>

      <Row style={styles.content}>
        <Col size={25}>
          <Text style={styles.headerText}>하객인원</Text>
        </Col>
        <Col size={25}>
          <Text style={styles.contentText}>{meal.meals_num_husband}명</Text>
        </Col>
        <Col size={25}>
          <Text style={styles.contentText}>{meal.meals_num_bride}명</Text>
        </Col>
        <Col size={25}>
          <Text style={[styles.contentText, styles.sum]}>
            {meal.meals_num_husband + meal.meals_num_bride}명
          </Text>
        </Col>
      </Row>

      <Row style={styles.content}>
        <Col size={25}>
          <Text style={styles.headerText}>식대 총 비용</Text>
        </Col>
        <Col size={25}>
          <Text style={styles.contentText}>
            {Amount(meal.meals_price * meal.meals_num_husband)}
          </Text>
        </Col>
        <Col size={25}>
          <Text style={styles.contentText}>
            {Amount(meal.meals_price * meal.meals_num_bride)}
          </Text>
        </Col>
        <Col size={25}>
          <Text style={[styles.contentText, styles.sum]}>
            {Amount(
              meal.meals_price * (meal.meals_num_husband + meal.meals_num_bride)
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

export default ReadWeddingMeal;

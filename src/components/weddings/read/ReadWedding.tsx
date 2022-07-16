import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import AppTemplate from '../../common/AppTemplate';
import ReadWeddingButtons from './ReadWeddingButtons';
import ReadWeddingMeal from './ReadWeddingMeal';
import ReadWeddingPrepayment from './ReadWeddingPrepayment';
import ReadWeddingPresent from './ReadWeddingPresent';
import ReadWeddingReserve from './ReadWeddingReserve';
import ReadWeddingTop from './ReadWeddingTop';

interface Props {
  wedding:
    | {
        wedding: WeddingType;
        convention: ConventionType;
        company: CompanyType;
        event: EventType;
        hanbok: HanbokType;
        meal: MealType;
        present: PresentType;
        reserve: ReserveType;
        prepayment: PrepaymentType;
      }
    | undefined;
  onUpdateWedding: () => void;
  onRemoveWedding: () => void;
  husbandCost: number;
  brideCost: number;
  allCost: number;
}

function ReadWedding({
  wedding,
  onUpdateWedding,
  onRemoveWedding,
  husbandCost,
  brideCost,
  allCost,
}: Props) {
  return (
    <AppTemplate>
      {wedding && (
        <>
          <Text h4 h4Style={styles.title}>
            신랑님 : {wedding.wedding.husband_name}님{' '}
            <Icon name="hearto" size={20} color="#da6d99" /> 신부님 :{' '}
            {wedding.wedding.bride_name}님
          </Text>
          <Text h4 h4Style={styles.date}>
            웨딩일시: {wedding.wedding.wedding_at} {wedding.wedding.event_at}
          </Text>

          <Divider />

          <Text h4 h4Style={styles.subTitle}>
            예식비용
          </Text>
          <ReadWeddingTop
            convention={wedding.convention}
            company={wedding.company}
            event={wedding.event}
            hanbok={wedding.hanbok}
            husbandCost={husbandCost}
            brideCost={brideCost}
            allCost={allCost}
          />

          <Text h4 h4Style={styles.subTitle}>
            식사비용
          </Text>
          <ReadWeddingMeal meal={wedding.meal} />

          <Text h4 h4Style={styles.subTitle}>
            답례품 비용
          </Text>
          <ReadWeddingPresent present={wedding.present} />

          <Text h4 h4Style={styles.subTitle}>
            예약금
          </Text>
          <ReadWeddingReserve reserve={wedding.reserve} />

          <Text h4 h4Style={styles.subTitle}>
            선결제
          </Text>
          <ReadWeddingPrepayment prepayment={wedding.prepayment} />

          <ReadWeddingButtons
            onRemoveWedding={onRemoveWedding}
            onUpdateWedding={onUpdateWedding}
          />
        </>
      )}
    </AppTemplate>
  );
}

// Styles
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#00a0a0',
    fontSize: 20,
    marginBottom: 10,
  },
  date: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: '#4455aa',
    marginTop: 15,
    marginLeft: 10,
  },
});

export default ReadWedding;

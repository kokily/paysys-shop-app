import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';
import WeddingTopAllCost from './top/WeddingTopAllCost';
import WeddingTopCompany from './top/WeddingTopCompany';
import WeddingTopConvention from './top/WeddingTopConvention';
import WeddingTopEvent from './top/WeddingTopEvent';
import WeddingTopHanbok from './top/WeddingTopHanbok';

interface Props {
  convention: ConventionType;
  company: CompanyType;
  event: EventType;
  hanbok: HanbokType;
  husbandCost: number;
  brideCost: number;
  allCost: number;
}

function ReadWeddingTop({
  convention,
  company,
  event,
  hanbok,
  husbandCost,
  brideCost,
  allCost,
}: Props) {
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

      <WeddingTopConvention convention={convention} />
      <WeddingTopCompany company={company} />
      <WeddingTopEvent event={event} />
      <WeddingTopHanbok hanbok={hanbok} />
      <WeddingTopAllCost
        title="총 예식비용"
        husband={husbandCost}
        bride={brideCost}
        sum={allCost}
      />
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
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ReadWeddingTop;

import type { Dispatch, SetStateAction } from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AppTemplate from '../../common/AppTemplate';
import SearchFront from './SearchFront';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';
import ListFrontsList from './ListFrontsList';

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  onSearch: () => void;
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function ListFronts({ search, setSearch, onSearch, navigation }: Props) {
  return (
    <AppTemplate>
      <ScrollView scrollEnabled={false}>
        <SearchFront
          search={search}
          setSearch={setSearch}
          onSearch={onSearch}
        />

        <Grid style={styles.table}>
          <Row style={styles.header}>
            <Col size={20}>
              <Text style={styles.headerText}>날짜</Text>
            </Col>
            <Col size={40}>
              <Text style={styles.headerText}>행사명</Text>
            </Col>
            <Col size={20}>
              <Text style={styles.headerText}>장소</Text>
            </Col>
            <Col size={20}>
              <Text style={styles.headerText}>작성자</Text>
            </Col>
          </Row>
        </Grid>
      </ScrollView>

      <ListFrontsList navigation={navigation} />
    </AppTemplate>
  );
}

// Styles
const styles = StyleSheet.create({
  table: {
    paddingVertical: 0,
    marginBottom: 40,
  },
  header: {
    paddingVertical: 10,
    backgroundColor: '#3E98AD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default ListFronts;

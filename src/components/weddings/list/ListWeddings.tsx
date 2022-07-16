import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';
import AppTemplate from '../../common/AppTemplate';
import { Button, Text } from 'react-native-elements';
import ListWeddingsList from './ListWeddingsList';

interface Props {
  onAddExpense: () => void;
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function ListWeddings({ onAddExpense, navigation }: Props) {
  return (
    <AppTemplate>
      <ScrollView scrollEnabled={false}>
        <View style={styles.buttonWrapper}>
          <Button
            title="웨딩 추가"
            type="solid"
            buttonStyle={[styles.button, styles.add]}
            titleStyle={styles.add}
            onPress={onAddExpense}
          />
        </View>

        <Grid style={styles.table}>
          <Row style={styles.header}>
            <Col size={30}>
              <Text style={styles.headerText}>웨딩일자</Text>
            </Col>
            <Col size={20}>
              <Text style={styles.headerText}>웨딩시간</Text>
            </Col>
            <Col size={25}>
              <Text style={styles.headerText}>신랑님</Text>
            </Col>
            <Col size={25}>
              <Text style={styles.headerText}>신부님</Text>
            </Col>
          </Row>
        </Grid>
      </ScrollView>

      <ListWeddingsList navigation={navigation} />
    </AppTemplate>
  );
}

// Styles
const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  button: {
    width: 120,
    fontWeight: '600',
  },
  add: {
    color: 'white',
    borderColor: 'red',
    backgroundColor: 'red',
  },
  table: {
    paddingVertical: 0,
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

export default ListWeddings;

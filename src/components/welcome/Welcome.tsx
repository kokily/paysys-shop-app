import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import AppTemplate from '../common/AppTemplate';
import Contents from './Contents';
import Copyright from './Copyright';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function Welcome({ navigation }: Props) {
  return (
    <AppTemplate>
      <Card containerStyle={styles.container}>
        <Card.Title style={styles.title}>행사전표시스템</Card.Title>

        <Card.Divider />

        <Contents />
        <Copyright navigation={navigation} />
      </Card>
    </AppTemplate>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    color: '#409cb1',
  },
});

export default Welcome;

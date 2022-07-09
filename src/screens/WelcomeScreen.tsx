import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppTemplate from '../components/common/AppTemplate';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function WelcomeScreen({ navigation }: Props) {
  return (
    <AppTemplate>
      <View>
        <Text>WelcomeScreen</Text>
      </View>
    </AppTemplate>
  );
}

const styles = StyleSheet.create({});

export default WelcomeScreen;

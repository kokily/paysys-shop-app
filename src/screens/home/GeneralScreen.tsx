import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function GeneralScreen({ navigation }: Props) {
  return (
    <View>
      <Text>GeneralScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default GeneralScreen;

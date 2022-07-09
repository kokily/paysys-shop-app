import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function ReserveListScreen({ navigation }: Props) {
  return (
    <View>
      <Text>ReserveListScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ReserveListScreen;

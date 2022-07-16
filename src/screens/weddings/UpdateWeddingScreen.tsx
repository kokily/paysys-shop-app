import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function UpdateWeddingScreen({ navigation }: Props) {
  return (
    <View>
      <Text>UpdateWeddingScreen</Text>
    </View>
  );
}

export default UpdateWeddingScreen;

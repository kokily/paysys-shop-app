import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function AddWeddingScreen({ navigation }: Props) {
  return (
    <View>
      <Text>AddWeddingScreen</Text>
    </View>
  );
}

export default AddWeddingScreen;

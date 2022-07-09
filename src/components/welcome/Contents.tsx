import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-elements';

function Contents() {
  return (
    <View style={styles.container}>
      <Text h4 h4Style={styles.content}>
        행사전표시스템은 컨벤션에서 사용하는 전표를 전산화하는 앱입니다
      </Text>

      <Card.Image
        style={styles.image1}
        source={require('../../../assets/shot01.png')}
      />

      <Text h4 h4Style={styles.content}>
        앱 사용자 등록은 홈페이지에서 승인받아 사용합니다
      </Text>

      <Card.Image
        style={styles.image2}
        source={require('../../../assets/shot02.png')}
      />

      <Text h4 h4Style={styles.content}>
        문의사항은 아래 관리자에게 연락주세요
      </Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  content: {
    fontSize: 15,
    fontWeight: '300',
    marginTop: 25,
  },
  image1: {
    width: 150,
    height: 160,
    marginTop: 25,
    marginLeft: 50,
  },
  image2: {
    width: 200,
    height: 100,
    marginTop: 25,
    marginLeft: 110,
  },
});

export default Contents;

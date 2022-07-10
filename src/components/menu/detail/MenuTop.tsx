import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Input, Text } from 'react-native-elements';
import { Amount } from '../../../libs/utils';

interface Props {
  menu: ItemType;
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
}

function MenuTop({ menu, price, setPrice }: Props) {
  return (
    <Grid>
      <Row style={styles.content}>
        <Col size={30}>
          <Text style={styles.contentText}>구 분</Text>
        </Col>
        <Col size={70}>
          <Text style={styles.contentText}>{menu.divide}</Text>
        </Col>
      </Row>

      <Row style={styles.content}>
        <Col size={30}>
          <Text style={styles.contentText}>단 가</Text>
        </Col>
        <Col size={70} style={menu.price === 0 ? { height: 40 } : {}}>
          {menu.price === 0 ? (
            <Input
              placeholder="단가를 입력하세요"
              autoCapitalize="none"
              value={price}
              onChangeText={setPrice}
              style={styles.input}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              autoCompleteType="off"
              keyboardType="number-pad"
            />
          ) : (
            <Text style={styles.contentText}>{Amount(menu.price)}</Text>
          )}
        </Col>
      </Row>

      <Row style={styles.content}>
        <Col size={30}>
          <Text style={styles.contentText}>단 위</Text>
        </Col>
        <Col size={70}>
          <Text style={styles.contentText}>{menu.unit}</Text>
        </Col>
      </Row>
    </Grid>
  );
}

// Styles
const styles = StyleSheet.create({
  content: {
    backgroundColor: '#748FFC',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderBottomColor: 'white',
    paddingVertical: 10,
    borderRadius: 4,
  },
  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  input: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    paddingVertical: 5,
  },
});

export default MenuTop;

import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import { Button, Text } from 'react-native-elements';

interface Props {
  item: ItemType;
  onRemoveOneCart: (id: string, name: string) => void;
}

function CartTableBody({ item, onRemoveOneCart }: Props) {
  return (
    <Row key={item.id} style={styles.content}>
      <Col size={20}>
        <Text style={styles.contentText}>[ {item.native} ]</Text>
        <Text style={styles.contentText}>{item.divide}</Text>
      </Col>
      <Col size={20}>
        <Text style={styles.contentText}>
          {item.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
      </Col>
      <Col size={40}>
        <Text style={[styles.contentText, { color: 'silver' }]}>
          {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
        </Text>
        <Text style={styles.contentText}>
          {item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </Text>
      </Col>
      <Col size={20} style={{ paddingRight: 5 }}>
        <Button
          title="삭 제"
          type="outline"
          buttonStyle={{
            borderColor: 'red',
          }}
          titleStyle={{ color: 'red', fontSize: 13 }}
          onPress={() => onRemoveOneCart(item.id, item.name)}
        />
      </Col>
    </Row>
  );
}

// Styles
const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#46A678',
    borderBottomWidth: 0.4,
    paddingVertical: 10,
  },
  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CartTableBody;

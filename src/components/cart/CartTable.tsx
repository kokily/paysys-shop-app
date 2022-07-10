import React from 'react';
import { StyleSheet } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';
import CartTableBody from './CartTableBody';

interface Props {
  items: ItemType[];
  onRemoveOneCart: (id: string, name: string) => void;
}

function CartTable({ items, onRemoveOneCart }: Props) {
  return (
    <Grid style={styles.table}>
      <Row style={styles.header}>
        <Col size={20}>
          <Text style={styles.headerText}>적용</Text>
        </Col>
        <Col size={20}>
          <Text style={styles.headerText}>수량</Text>
        </Col>
        <Col size={40}>
          <Text style={styles.headerText}>단가</Text>
        </Col>
        <Col size={20}>
          <Text style={styles.headerText}>삭제</Text>
        </Col>
      </Row>

      {items.length > 0 &&
        items.map((item) => (
          <CartTableBody item={item} onRemoveOneCart={onRemoveOneCart} />
        ))}
    </Grid>
  );
}

// Styles
const styles = StyleSheet.create({
  table: {
    marginTop: 20,
  },
  header: {
    flex: 1,
    backgroundColor: '#46A678',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 15,
    marginVertical: 5,
    backgroundColor: 'rgb(12, 166, 120)',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default CartTable;

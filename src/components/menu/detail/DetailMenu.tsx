import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import AppTemplate from '../../common/AppTemplate';
import MenuButtons from './MenuButtons';
import MenuContent from './MenuContent';
import MenuTop from './MenuTop';

interface Props {
  menu: ItemType | undefined;
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  count: string;
  setCount: Dispatch<SetStateAction<string>>;
  onAddCart: () => void;
  onBack: () => void;
}

function DetailMenu({
  menu,
  price,
  setPrice,
  count,
  setCount,
  onAddCart,
  onBack,
}: Props) {
  return (
    <AppTemplate>
      {menu && (
        <Card>
          <Card.Title style={styles.title}>
            {menu.divide} | {menu.native}
          </Card.Title>

          <Card.Divider />

          <MenuTop menu={menu} price={price} setPrice={setPrice} />
          <MenuContent
            menu={menu}
            price={price}
            count={count}
            setCount={setCount}
          />

          <MenuButtons onAddCart={onAddCart} onBack={onBack} />
        </Card>
      )}
    </AppTemplate>
  );
}

// Styles
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: 'white',
    backgroundColor: '#FF6B6B',
    padding: 10,
  },
});

export default DetailMenu;

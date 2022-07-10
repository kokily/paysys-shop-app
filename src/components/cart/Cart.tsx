import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import AppTemplate from '../common/AppTemplate';
import CartButtons from './CartButtons';
import CartInputs from './CartInputs';
import CartTable from './CartTable';
import CartTotal from './CartTotal';

interface Props {
  cart: CartType | undefined;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  hall: string;
  setHall: Dispatch<SetStateAction<string>>;
  etc: string;
  setEtc: Dispatch<SetStateAction<string>>;
  totalAmount: number;
  onAddBill: () => void;
  onRemoveCart: () => void;
  onRemoveOneCart: (id: string, name: string) => void;
}

function Cart({
  cart,
  title,
  setTitle,
  hall,
  setHall,
  etc,
  setEtc,
  totalAmount,
  onAddBill,
  onRemoveCart,
  onRemoveOneCart,
}: Props) {
  return (
    <AppTemplate>
      <Text h4 h4Style={styles.title}>
        전표 확인(종합)
      </Text>

      {cart ? (
        <>
          <CartTable
            items={cart.items || []}
            onRemoveOneCart={onRemoveOneCart}
          />
          <CartTotal total={totalAmount} />
          <CartInputs
            title={title}
            setTitle={setTitle}
            hall={hall}
            setHall={setHall}
            etc={etc}
            setEtc={setEtc}
          />
          <CartButtons onAddBill={onAddBill} onRemoveCart={onRemoveCart} />
        </>
      ) : (
        <View style={styles.noneContainer}>
          <Text style={styles.none}>추가된 항목이 없습니다</Text>
        </View>
      )}
    </AppTemplate>
  );
}

// Styles
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  noneContainer: {
    flex: 1,
    marginVertical: 10,
    alignItems: 'center',
  },
  none: {
    fontSize: 20,
  },
});

export default Cart;

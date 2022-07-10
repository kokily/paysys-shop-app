import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Text } from 'react-native-elements';
import AppTemplate from '../../common/AppTemplate';
import MenuItem from './MenuItem';

interface Props {
  menu: ItemType[];
  divide: any;
  onDetailMenu: (id: string) => void;
}

function ReserveList({ menu, divide, onDetailMenu }: Props) {
  return (
    <AppTemplate>
      <Text h4 h4Style={styles.title}>
        {divide}
      </Text>

      <Divider />

      {menu.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          onDetailMenu={onDetailMenu}
          native="reserve"
        />
      ))}
    </AppTemplate>
  );
}

// Styles
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 5,
    color: '#68a614',
  },
});

export default ReserveList;

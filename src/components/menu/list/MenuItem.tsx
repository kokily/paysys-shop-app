import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Amount } from '../../../libs/utils';

interface Props {
  item: ItemType;
  onDetailMenu: (id: string) => void;
  native: 'soldier' | 'reserve' | 'general';
}

function MenuItem({ item, onDetailMenu, native }: Props) {
  let nativeColor;

  if (native === 'soldier') {
    nativeColor = '#1098ad';
  } else if (native === 'reserve') {
    nativeColor = '#68a614';
  } else {
    nativeColor = '#e47112';
  }

  return (
    <ListItem
      hasTVPreferredFocus={false}
      tvParallaxProperties={false}
      onPress={() => onDetailMenu(item.id)}
      style={styles.container}
    >
      <ListItem.Content style={styles.menu}>
        <ListItem.Title
          style={
            (styles.title,
            {
              color: nativeColor,
            })
          }
        >
          {item.name} | {Amount(item.price)} | {item.native}
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#1098ad',
    borderBottomWidth: 0.4,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 5,
  },
});

export default MenuItem;

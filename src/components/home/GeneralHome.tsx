import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import AppTemplate from '../common/AppTemplate';

interface Props {
  menu: MenuType[];
  onGeneralList: (divide: string) => void;
}

function GeneralHome({ menu, onGeneralList }: Props) {
  return (
    <AppTemplate>
      {menu.map((item) => (
        <ListItem
          key={item.id}
          bottomDivider
          hasTVPreferredFocus={false}
          tvParallaxProperties={false}
          onPress={() => onGeneralList(item.divide)}
        >
          <ListItem.Content style={styles.menu}>
            <ListItem.Title style={styles.item}>{item.divide}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </AppTemplate>
  );
}

// Styles
const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  item: {
    fontSize: 18,
    fontWeight: '600',
    color: '#e47112',
  },
});

export default GeneralHome;

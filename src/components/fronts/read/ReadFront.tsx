import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import AppTemplate from '../../common/AppTemplate';
import ReadFrontButtons from './ReadFrontButtons';
import ReadFrontTable from './ReadFrontTable';
import ReadFrontTop from './ReadFrontTop';
import ReadTotal from './ReadTotal';

interface Props {
  front: BillType | undefined;
  user: MeType | null;
  onRemoveBill: () => void;
  onRestoreBill: () => void;
}

function ReadFront({ front, user, onRemoveBill, onRestoreBill }: Props) {
  return (
    <AppTemplate>
      {front && user && (
        <>
          <Text h4 h4Style={styles.title}>
            [{' '}
            {front.title.length > 18
              ? `${front.title.slice(0, 18)}...`
              : front.title}{' '}
            ]
          </Text>

          <ReadFrontTop front={front} />
          <ReadFrontTable front={front} />
          <ReadTotal total={front.total_amount} />

          {(user.user_id === front.user_id || user.admin) && (
            <ReadFrontButtons
              user={user}
              onRemoveBill={onRemoveBill}
              onRestoreBill={onRestoreBill}
            />
          )}
        </>
      )}
    </AppTemplate>
  );
}

// Styles
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#00a0a0',
  },
});

export default ReadFront;

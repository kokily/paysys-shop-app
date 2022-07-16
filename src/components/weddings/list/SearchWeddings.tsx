import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Button, Card, Input } from 'react-native-elements';

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  onSearch: () => void;
}

function SearchWeddings({ search, setSearch, onSearch }: Props) {
  return (
    <Card containerStyle={styles.container}>
      <Grid>
        <Row>
          <Col size={70}>
            <Input
              textContentType="none"
              autoCapitalize="none"
              value={search}
              onChangeText={setSearch}
              placeholder="제목을 검색하세요"
              autoCompleteType={false}
            />
          </Col>
          <Col size={30}>
            <Button title="검색" onPress={onSearch} />
          </Col>
        </Row>
      </Grid>
    </Card>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginBottom: 15,
    paddingBottom: 0,
  },
});

export default SearchWeddings;

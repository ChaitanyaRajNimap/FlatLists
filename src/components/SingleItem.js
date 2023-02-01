import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

const SingleItem = ({title, body}) => {
  return (
    <Card elevation={0} style={styles.card}>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{body}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default SingleItem;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#BEBCBC',
    marginVertical: 10,
  },
});

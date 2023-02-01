import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Caption} from 'react-native-paper';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Caption style={styles.caption}>Developed by Chay</Caption>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#272727',
    paddingBottom: 30,
  },
  caption: {
    color: '#f1f1f1',
    textAlign: 'center',
  },
});

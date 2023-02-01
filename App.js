import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BasicFlatList from './src/screens/BasicFlatList';
import FLWithScrollAndLazyLoading from './src/screens/FLWithScrollAndLazyLoading';

const App = () => {
  return (
    <View style={styles.rootContainer}>
      {/* <BasicFlatList /> */}
      <FLWithScrollAndLazyLoading />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

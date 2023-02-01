import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Title, Divider} from 'react-native-paper';
import SingleItem from '../components/SingleItem';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

function FLWithScrollAndLazyLoading() {
  const [posts, setPosts] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(1);

  const fetchPosts = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_page=${scrollIndex}`,
    );
    console.log('Response Data : ', response.data);
    setActiveData(response.data.slice(0, 10));
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchNextItems = async () => {
    if (scrollIndex <= 9) {
      setScrollIndex(scrollIndex + 1);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_page=${scrollIndex + 1}`,
      );
      console.log('Next Items : ', response.data);
      const newArray = [...activeData, ...response.data];
      setActiveData(newArray);
    } else {
      return;
    }
  };

  return (
    <View style={styles.root}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Title style={styles.heading}>Todo List</Title>
      </View>
      <FlatList
        data={activeData}
        style={styles.list}
        ItemSeparatorComponent={() => <Divider />}
        keyExtractor={item => item.id}
        initialNumToRender={10}
        onEndReachedThreshold={0.7}
        onEndReached={() => fetchNextItems()}
        ListFooterComponent={
          scrollIndex <= 10 && scrollIndex >= 1 && <Text>Loading</Text>
        }
        showsVerticalScrollIndicator={true}
        renderItem={({item}) => <SingleItem title={item.title} />}
      />
      <View>
        <Footer />
      </View>
    </View>
  );
}

export default FLWithScrollAndLazyLoading;

const styles = StyleSheet.create({
  root: {
    marginBottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  list: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.86,
    paddingHorizontal: 10,
    marginBottom: 0,
  },
  heading: {
    textAlign: 'center',
    marginTop: 24,
  },
  header: {
    padding: 10,
    backgroundColor: '#FDA0850',
    width: Dimensions.get('window').width,
  },
});

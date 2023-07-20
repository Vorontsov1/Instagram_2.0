import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentScreen';


const App = () => {
  return (
    <SafeAreaView style={ styles.app }>
      {/* <HomeScreen /> */}
      <CommentsScreen />
    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'black',
  },
});
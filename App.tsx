import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';


const App = () => {
  return (
    <SafeAreaView style={ styles.app }>
      {/* <HomeScreen /> */}
      {/* <CommentsScreen /> */ }
      <ProfileScreen />
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
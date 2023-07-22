import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import EditProfielScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import PostUploadScreen from './src/screens/PostUploadScreen';


const App = () => {
  return (
    <SafeAreaView style={ styles.app }>
      {/* <HomeScreen /> */}
      {/* <CommentsScreen /> */ }
      {/* <ProfileScreen /> */ }
      {/* <EditProfielScreen /> */ }
      <PostUploadScreen />
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
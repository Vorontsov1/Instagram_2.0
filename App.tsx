import {StyleSheet, SafeAreaView} from 'react-native';
// import HomeScreen from './src/screens/HomeScreen/HomeScreen';
//  import CommentScreen from './src/screens/CommentScreen';
// import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
// import EditProfielScreen from './src/screens/EditProfileScreen/EditProfileScreen';
// import PostUploadScreen from './src/screens/PostUploadScreen';

import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
     <Navigation />
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
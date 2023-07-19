import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';


const App = () => {
  return (
    <SafeAreaView style={ styles.app }>
     <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
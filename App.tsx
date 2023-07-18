import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FeedPost  from './src/components/FeedPost';

const post = {
  id: '1',
  createdAt: '19 December 2021',
  image:
    'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7bb187dd27789876f477e4af6b309dcd&w=1000&q=80',

  description:
    "Twin Peaks is different. It's got a sense of humor. The rest of my films do not have a sense of humor... of the same type. It's a sense of humor that comes from human behavior that is real but unexpected.",
  user: {
    image:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    username: 'laurapalmer',
  },
  nofComments: 11,
  nofLikes: 77,
  comments: [
    {
      id: '1',
      comment: 'fire walk with me',
      user: {
        username: 'davidlinch',
      },
    },
    {
      id: '2',
      comment:
        "The owls are not what they seem. The same could be said about Twin Peaks. Underneath the surface, there's another world. And if you can get into that world, you can get lost, and it's a beautiful thing.",
      user: {
        username: 'dalecooper',
      },
    },
  ],
};

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost post={post} />
    </ScrollView>
  );
}

export default App;
const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
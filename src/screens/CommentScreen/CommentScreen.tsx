import {useState} from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import comments from '../../assets/data/comments';
import Comment from '../../components/Comment';
import Input from './Input'

const CommentScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
          <FlatList
              showsVerticalScrollIndicator={false}
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        style={{padding: 10}}
          />
       <Input />
    </SafeAreaView>
  );
}

export default CommentScreen;

import {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';




const Input = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.warn('Post', newComment);
    // sending the data to backend

    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        }}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Add comment..."
        placeholderTextColor={colors.grey}
        multiline
      />

      <Text onPress={onPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end',
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: 10,
    paddingTop: 10,
    paddingRight: 50,
    color: colors.white,
    fontWeight: fonts.weight.bold,
  },
  button: {
    position: 'absolute',
    right: 33,
    top: 21,
    color: colors.accent,
    fontWeight: fonts.weight.bold,
  },
});
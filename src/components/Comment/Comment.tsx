import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors.ts';
import font from '../../theme/fonts.ts';
import Like from '../../assets/svg/heart-like.svg';
import Liked from '../../assets/svg/heart-liked.svg';
import { IComment } from '../../types/models.ts';


interface CommentProps { 
    comment: IComment;
}

const Comment = ({comment}: CommentProps) => {
      const [isLiked, setIsLiked] = useState(false);
      const [isComment, setIsComment] = useState(false);
     
  const toggleComment = () => {
    setIsComment(v => !v); //make it to true
  };
  
  return (
    <View style={styles.comment}>
      <Text style={styles.commetnText}>
        <Text style={styles.boldText}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <TouchableOpacity onPress={toggleComment}>
        {isComment ? (
          <Liked width={15} height={15} style={styles.icon} />
        ) : (
          <Like width={15} height={15} style={styles.icon} />
        )}
      </TouchableOpacity>
    </View>
  );
}

export default Comment;

const styles = StyleSheet.create({
  boldText: {
    fontWeight: font.weight.bold,
  },
  commetnText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
  },
});
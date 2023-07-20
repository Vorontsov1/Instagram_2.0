import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import colors from '../../theme/colors.ts';
import font from '../../theme/fonts.ts';
import Like from '../../assets/svg/heart-like.svg';
import Liked from '../../assets/svg/heart-liked.svg';
import { IComment } from '../../types/models.ts';


interface CommentProps { 
  comment: IComment;
  includeDetails: boolean;
}

const Comment = ({comment, includeDetails = false}: CommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(v => !v); //make it to true
  };

  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}

      <View style={styles.middleColumn}>
        <Text style={styles.commetnText}>
          <Text style={styles.boldText}>{comment.user.username}</Text>{' '}
          {comment.comment}
        </Text>

        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Replay</Text>
          </View>
        )}
      </View>

      <Pressable onPress={toggleLike} hitSlop={5}>
        {isLiked ? (
          <Liked width={15} height={15} style={styles.icon} />
        ) : (
          <Like width={15} height={15} style={styles.icon} />
        )}
      </Pressable>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: font.weight.bold,
  },
  commetnText: {
    color: colors.white,
    lineHeight: 18,
  },
  icon: {
    marginHorizontal: 5,
  },
  avatar: {
    marginHorizontal: 5,
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 7,
  },
  middleColumn: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
    color: colors.grey,
  },
});
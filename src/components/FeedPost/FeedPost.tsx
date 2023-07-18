import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../theme/colors';
import font from '../../theme/fonts';
import DotsSvg from '../../assets/svg/three-dots-svgrepo-com.svg';
import Like from '../../assets/svg/heart-like.svg';
import Liked from '../../assets/svg/heart-liked.svg';
import ChatIcon from '../../assets/svg/chat-dots-svgrepo-com.svg';
import Send from '../../assets/svg/send-1-svgrepo-com.svg';
import Bookmark from '../../assets/svg/bookmarks-svgrepo-com.svg';
import styles from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/models.ts';

interface FeedPostProps { 
  post: IPost;
}


const FeedPost = ({post}: FeedPostProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <SafeAreaView style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftHeaderContent}>
          <Image
            source={{
              uri: post.user.image,
            }}
            style={styles.avatar}
          />
          <Text style={styles.userName}>{post.user.username}</Text>
        </View>

        <TouchableOpacity>
          <DotsSvg width={20} height={20} style={styles.dotSvg} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.svgContainer}>
          <View style={styles.threeIcons}>
            <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
              {isLiked ? (
                <Liked width={30} height={30} style={styles.icon} />
              ) : (
                <Like width={30} height={30} style={styles.icon} />
              )}
            </TouchableOpacity>
            <ChatIcon width={30} height={30} style={styles.icon} />
            <Send width={30} height={30} style={styles.icon} />
          </View>
          <TouchableOpacity style={{marginLeft: 'auto'}}>
            <Bookmark width={30} height={30} />
          </TouchableOpacity>
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.boldText}>linch</Text> and{' '}
          <Text style={styles.boldText}>{post.nofLikes} others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.boldText}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>

        {/* Comments */}
        <Text style={styles.allComments}>
          View all {post.nofComments} comments
        </Text>
        {post.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}

        {/* Posted date */}
        <Text style={styles.allComments}>{post.createdAt}</Text>
      </View>
    </SafeAreaView>
  );
};

export default FeedPost;

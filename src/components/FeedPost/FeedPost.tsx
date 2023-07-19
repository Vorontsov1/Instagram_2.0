import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
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
import { IPost } from '../../types/models.ts';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';



interface FeedPostProps { 
  post: IPost;
}


const FeedPost = ({post}: FeedPostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false); 

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v); //make it to true
  };

  const toggleLike = () => { 
  setIsLiked(v => !v); //make it to true
  };


  let content = null;
  if (post.image) { 
    content = (<Image
      source={ {
        uri: post.image,
      } }
      style={ styles.image }
    />);
  } else if (post.images) {
    content = (<Carousel images={post.images} onDoublePress={toggleLike} />)
  }


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
      <DoublePressable onDoublePress={toggleLike}>
       {content}
      </DoublePressable>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.svgContainer}>
          <View style={styles.threeIcons}>
            <Pressable onPress={toggleLike}>
              {isLiked ? (
                <Liked width={30} height={30} style={styles.icon} />
              ) : (
                <Like width={30} height={30} style={styles.icon} />
              )}
            </Pressable>
            <TouchableOpacity>
              <ChatIcon width={30} height={30} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Send width={30} height={30} style={styles.icon} />
            </TouchableOpacity>
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
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.boldText}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>
        <Text style={styles.allComments} onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
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

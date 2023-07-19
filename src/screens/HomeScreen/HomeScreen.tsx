import {FlatList} from 'react-native';
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/data/posts';

const HomeScreen = () => {
  return (
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />

  );
};

export default HomeScreen;

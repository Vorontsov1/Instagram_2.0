import {Image, FlatList} from 'react-native';
import user from '../../assets/data/user.json';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import ProfileHeader from './ProfielHeader';
import {useRoute, useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

 const {userId} = route.params;
 


    return <FeedGridView
      data={ user.posts }
      ListHeaderComponent={ ProfileHeader }
  />;
};

export default ProfileScreen;

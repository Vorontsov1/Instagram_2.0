import {Image, FlatList} from 'react-native';
import user from '../../assets/data/user.json';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import ProfileHeader from './ProfielHeader';


const ProfileScreen = () => {
    return <FeedGridView
      data={ user.posts }
      ListHeaderComponent={ProfileHeader}
  />;
};

export default ProfileScreen;

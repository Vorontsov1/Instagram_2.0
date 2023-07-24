import {View, Text, Image} from 'react-native';
import Button from '../../components/Button';
import user from '../../assets/data/user.json';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const ProfileHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* profiel image */}
        <Image style={styles.avatar} source={{uri: user.image}} />
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text style={styles.textPost}>Post</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>33</Text>
          <Text style={styles.textPost}>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>71</Text>
          <Text style={styles.textPost}>Following</Text>
        </View>

        {/* posts, followers, following number */}
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>

      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => console.warn('Edit Profile')}
        />

        <Button
          text="Go Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};


export default ProfileHeader;
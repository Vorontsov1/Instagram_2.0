import { NavigationContainer } from '@react-navigation/native';
import {View, Text, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNav from './BottomTabNav';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CommentScreen from '../screens/CommentScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import EditProfielScreen from '../screens/EditProfileScreen/EditProfileScreen';
import PostUploadScreen from '../screens/PostUploadScreen';
import logo from '../assets/images/instalogo.png';



const Stack = createNativeStackNavigator();



const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={BottomTabNav}
            options={{
              headerTitle: () => <HeaderTitle />,
              headerStyle: {backgroundColor: 'black', headerShown: false},
            }}
          />
          <Stack.Screen
            name="UserProfile"
            component={ProfileScreen}
            options={{title: 'Profile', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      style={{width: 100, height: 30}}
      resizeMode="contain"
    />
  );
};



export default Navigation;
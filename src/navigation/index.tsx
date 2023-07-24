import { NavigationContainer } from '@react-navigation/native';
import {View, Text, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CommentScreen from '../screens/CommentScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import EditProfielScreen from '../screens/EditProfileScreen/EditProfileScreen';
import PostUploadScreen from '../screens/PostUploadScreen';
import logo from '../assets/images/logo.png';



const Stack = createNativeStackNavigator();



const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
          <Stack.Screen
            name="Feed"
            component={HomeScreen}
            options={{
            headerShown: false,
            }}
          />

          <Stack.Screen
            name="UserProfile"
            component={ProfileScreen}
            options={{title: 'Profile'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};



export default Navigation;
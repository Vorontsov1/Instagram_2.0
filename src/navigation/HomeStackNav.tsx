import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import logo from '../assets/images/instalogo.png';

const Stack = createNativeStackNavigator();

const HomeStackNav = () => { 

    return (
      <Stack.Navigator>
            <Stack.Screen
                name="Feed"
                component={ HomeScreen }
                 options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserProfile"
          component={ProfileScreen}
          options={{title: 'Profile', headerShown: false}}
        />
      </Stack.Navigator>
    );
}



export default HomeStackNav;
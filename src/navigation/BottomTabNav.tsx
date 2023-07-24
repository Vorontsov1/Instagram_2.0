import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useRoute, useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import PostUploadScreen from '../screens/PostUploadScreen';
import HomeSvg from '../assets/svg/home.svg';
import SearchSvg from '../assets/svg/search.svg';
import UploadSvg from '../assets/svg/square-plus.svg';
import NotificationSvg from '../assets/svg/heart.svg';
import ProfileSvg from '../assets/svg/user.svg';
import colors from '../theme/colors.ts'
import HomeStackNav from './HomeStackNav';



const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.white,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {backgroundColor: colors.black},
        tabBarIcon: ({focused, color, size}) => {
          let SVGIcon;
          if (route.name === 'HomeStack') {
            SVGIcon = HomeSvg;
          } else if (route.name === 'Search') {
            SVGIcon = SearchSvg;
          } else if (route.name === 'Camera') {
            SVGIcon = UploadSvg;
          } else if (route.name === 'Upload') {
            SVGIcon = NotificationSvg;
          } else if (route.name === 'Profile') {
            SVGIcon = ProfileSvg;
          }
          // You can return any component that you like here!
          return <SVGIcon width={size} height={size} fill={color} />;
        },
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNav}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Camera"
        component={PostUploadScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Upload"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;

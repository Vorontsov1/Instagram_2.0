import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import font from '../../theme/fonts';


export default StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  leftHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  dotSvg: {},
  userName: {
    fontWeight: font.weight.bold,
    color: colors.white,
    marginRight: 10,
  },
  svgContainer: {
    flexDirection: 'row',
  },
  threeIcons: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  icon: {
    marginHorizontal: 5,
  },
  footer: {
    padding: 12,
  },
  text: {
    marginBottom: 2,
    color: colors.white,
    lineHeight: 18,
  },
  boldText: {
    fontWeight: font.weight.bold,
  },
  allComments: {
    color: colors.grey,
  },
});
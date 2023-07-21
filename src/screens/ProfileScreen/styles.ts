import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';


export default styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
      justifyContent: 'space-between',
    marginVertical: 10,
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  numberContainer: {
    color: colors.grey,
    alignItems: 'center',
  },
  numberText: {
    color: colors.white,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.full,
  },
  textPost: {
    color: colors.white,
  },
  name: {
    color: colors.white,
    fontSize: fonts.weight.semi,
  },
  bio: {
    color: colors.white,
  },
});
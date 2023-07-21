import { Pressable, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors.ts';
import fonts from '../../theme/fonts.ts';

interface IButton { 
    text?: string;
    onPress?: () => void;
}

const Button = ({text = '', onPress = () => {}}: IButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text }</Text>
    </TouchableOpacity>
  );
};

export default Button;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 5,
        padding: 5,
        alignItems: 'center',
        margin: 5,
    },
    text: {
        color: colors.white,
        fontWeight: fonts.weight.semi,
    },
});
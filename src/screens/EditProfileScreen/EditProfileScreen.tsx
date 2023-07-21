import {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useForm, Controller, Control, SubmitHandler} from 'react-hook-form';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors.ts';
import fonts from '../../theme/fonts.ts';
import {IUser} from '../../types/user';
import {launchImageLibrary} from 'react-native-image-picker';

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  multiline?: boolean;
  name: IEditableUserField;
  rules?: object;
}

const CustomInput = ({label}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.inputWithUnderline}>
      <TextInput
        style={styles.input}
        placeholder={label}
        placeholderTextColor={colors.grey}
      />
    </View>
  </View>
);


const EditProfileScreen = () => {
const onSubmit = () => console.log('Submit');

  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile photo</Text>
      <CustomInput label="Name" />
      <CustomInput label="Username" />
      <CustomInput label="Pronounce" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" multiline />

      <Text onPress={onSubmit} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 10,
  },
  label: {
    width: 75,
    color: colors.white,
  },
  inputWithUnderline: {
    borderBottomWidth: 1,
    borderColor: colors.grey,
    flex: 1,
  },
  input: {
    padding: 5,
    color: colors.white,
  },
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    marginTop: 10,
  },
});

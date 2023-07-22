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

const CustomInput = ({
  label,
  control,
  multiline,
    name = false,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
        name={ name }
        rules={ rules}
        render={ ({ field: { onChange, value, onBlur }, fieldState: {error} }) => {
    

      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.inputWithUnderline}>
            <TextInput
              style={[
                styles.input,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: error ? colors.error : colors.grey,
                },
              ]}
              placeholder={label}
              placeholderTextColor={colors.grey}
              multiline={multiline}
              onChangeText={text => onChange(text)}
              onBlur={onBlur}
              value={value}
            />
            {error && <Text style={{color: colors.error}}>{error.message || "Error"}</Text>}
          </View>
        </View>
      );
    }}
  />
);

const EditProfileScreen = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<IEditableUser>({
        defaultValues: {
            name: user.name,
            username: user.username,
            website: user.website,
            bio: user.bio,
        }
    });

  const onSubmit = (data) => {
    console.log(data);
  };
    
     const URL_REGEX =
       /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    
    
  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile photo</Text>
      <CustomInput
        name="name"
        control={control}
        rules={{required: 'Name is required'}}
        label="Name"
      />
      <CustomInput
        name="username"
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username must be at least 5 characters long',
          },
        }}
        label="Username"
      />
      <CustomInput
        name="website"
        control={control}
        rules={{
          required: 'Website is required',
          pattern: {value: URL_REGEX, message: 'Invalid URL'},
        }}
        label="Website"
      />
      <CustomInput
        name="bio"
        control={control}
              rules={{
                  maxLength: {
                      value: 200,
                      message: 'Bio must be at most 200 characters long',
                  },
              }}
        label="Bio"
        multiline
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
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
      flex: 1,
  },
  input: {
    padding: 5,
    color: colors.white,
  },
  textButton: {
    color: colors.accent,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    marginTop: 10,
  },
});

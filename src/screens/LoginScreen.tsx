import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../constants/Dimension';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../reduxTKit/Store';
import {
  againPasswordAction,
  birthDateAction,
  genderAction,
  mailAddressAction,
  nameAction,
  passwordAction,
  surnameAction,
  tcAction,
} from '../reduxTKit/features/AuthSlices/RegisterSlice';

const dispatch = useDispatch();

const user = useSelector((state: RootState) => state.Register.value);

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Giriş Yap</Text>


        <Text style={{color: 'grey'}}>E-Posta Adresi</Text>
        <TextInput
          style={styles.input}
          value={user.mailAddress}
          onChangeText={(text: string) => {
            dispatch(mailAddressAction(text));
          }}
        />

        <Text style={{color: 'grey'}}>Şifre</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={user.password}
          onChangeText={(text: string) => {
            dispatch(passwordAction(text));
          }}
        />

       

        <TouchableOpacity style={styles.button}>
          <Text style={{color: Colors.white, fontSize: 20}}>Giriş Yap</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    alignSelf: 'center',
    paddingVertical: verticalScale(30),
    color: Colors.blue,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.grey,
    height: verticalScale(40),
    borderRadius: 8,
    marginVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(8),
    marginBottom: moderateScale(20),
  },
  button: {
    borderRadius: 8,
    backgroundColor: Colors.blue,
    height: verticalScale(45),
    width: horizontalScale(200),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

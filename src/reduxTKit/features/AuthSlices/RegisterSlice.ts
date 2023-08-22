import {createSlice} from '@reduxjs/toolkit';
import {IUser} from '../../../models/UserModel';

const initialState: IUser = {
  name: '',
  surname: '',
  tc: 0,
  birthDate: '',
  gender: '',
  mailAddress: '',
  password: '',
  againPassword: '',
};

const RegisterSlice = createSlice({
  name: 'Register',
  initialState: {value: initialState},
  reducers: {
    nameAction: (state, action: {payload: any; type: any}) => {
      state.value.name = action.payload;
    },
    surnameAction: (state, action: {payload: any; type: any}) => {
      state.value.surname = action.payload;
    },
    tcAction: (state, action: {payload: any; type: any}) => {
      state.value.tc = action.payload;
    },
    birthDateAction: (state, action: {payload: any; type: any}) => {
      state.value.birthDate = action.payload;
    },
    genderAction: (state, action: {payload: any; type: any}) => {
      state.value.gender = action.payload;
    },
    mailAddressAction: (state, action: {payload: any; type: any}) => {
      state.value.mailAddress = action.payload;
    },
    passwordAction: (state, action: {payload: any; type: any}) => {
      state.value.password = action.payload;
    },
    againPasswordAction: (state, action: {payload: any; type: any}) => {
      state.value.againPassword = action.payload;
    },
  },
});

export default RegisterSlice.reducer;
export const {
  nameAction,
  surnameAction,
  tcAction,
  birthDateAction,
  genderAction,
  mailAddressAction,
  passwordAction,
  againPasswordAction,
} = RegisterSlice.actions;

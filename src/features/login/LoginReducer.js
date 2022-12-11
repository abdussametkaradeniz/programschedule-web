import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getLogin } from './LoginApi';
import { setAuthToken } from '../helpers/setAuthToken';


const initialState={
    CustomerId : -1,
    loginStatus : false,
};


export const LoginAsync = createAsyncThunk(
    "Login",
    async(Email,Password) =>{
        const response = await getLogin(Email,Password);
        return response.data;
    }
);


export const loginProcess = createSlice({
    name: "Login",
    initialState,
    reducers:{
        login:(state,action) =>{
            state.loginStatus = true;
            state.CustomerId = action.payload;
        },logout:(state) =>{
            localStorage.removeItem("jwtToken");
            setAuthToken(false);
            state.loginStatus = false;
            state.CustomerId = -1;
        }
    }
});


export const {login,logout} = loginProcess.actions;


export const selectCustomerId = (state) => state.Login.CustomerId.value;

export const selectCustomerLoginStatus = (state) => state.Login.loginStatus.value;


export default loginProcess.reducer;
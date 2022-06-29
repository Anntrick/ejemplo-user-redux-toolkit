import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    password: '',
    token: "",
    isLogged: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        username: "fakename",
        email: "fakeemail",
        token: "faketoken",
        isLogged: true
      }
    },
    register: (state, action) => {
      return {
        ...state
      }
    }
  },
});

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const user = await axios.get('https://reqres.in/api/login',
    {
      method: 'POST',
      headers: {
        Accept: 'aplication/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    
    let response = await user
    if(response.status === 200) {
      dispatch(login(response.data))
    } 
  } catch (error) {
    console.log(error)
  }
}

export const registerUser = (email, password) => async (dispatch) => {
  try {
    const user = await axios.get('https://reqres.in/api/register',
    {
      method: 'POST',
      headers: {
        Accept: 'aplication/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    
    let response = await user
    if(response.status === 200) {
      dispatch(register(response.data))
    } 
  } catch (error) {
    console.log(error)
  }
}

export const { login } = userSlice.actions

export const userSelector = (state) => state.user

export default userSlice.reducer
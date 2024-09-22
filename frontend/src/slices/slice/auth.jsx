import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../../environment';
import { errorMsg, successMsg } from '../../toast';

export const userLogin = createAsyncThunk(
  //for register
  'userLogin',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${API_URL}/user/userRegister`,
        formData,
      );
      if (response.data.status === 1) {
        successMsg('Signup Successfully');
        return response.data;
      } else {
        errorMsg(response.data.msg);
        return thunkAPI.rejectWithValue(response.data.msg);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || 'Something went wrong',
      );
    }
  },
);

export const login = createAsyncThunk('login', async (formData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/user/userLogin`, formData);
    if (response.data.status === 1) {
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('userData', JSON.stringify(response.data.userData));
      localStorage.setItem('token', response.data.token);
      successMsg('Login Successfully');
      console.log('dignuo', response.data);
      return response.data;
    } else {
      errorMsg(response.data.msg);
      return thunkAPI.rejectWithValue(response.data.msg);
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data || 'Something went wrong',
    );
  }
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    loading: false,
    error: false,
    userData: {},
    isAuthenticated: localStorage.getItem('isAuthenticated'),
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        console.log('data', action.payload);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.msg;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        console.log('data', action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.msg;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

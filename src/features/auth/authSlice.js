// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { API_URLS } from '../../api/auth';
import { makeApiRequest } from '../../api/function';
// import { makeApiRequest } from '../../api/api';
// import { API_URLS } from '../../api/apiEndpoints';

const initialState = {
  isAuthenticated: false,
  user: null,
  status: 'idle',
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const data = await makeApiRequest('POST', API_URLS.LOGIN, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userInfo, thunkAPI) => {
    try {
      const data = await makeApiRequest('POST', API_URLS.SIGNUP, userInfo);
      toast.success('Registration successful!');
      return data;
    } catch (error) {
      toast.error(error.message);
      // console.log()
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('user');
    },
    checkAuth: (state) => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        state.isAuthenticated = true;
        state.user = user;
        state.status = 'succeeded';
      } else {
        state.isAuthenticated = false;
        state.user = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { logout, checkAuth } = authSlice.actions;

export default authSlice.reducer;

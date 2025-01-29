import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure, logout } from './userSlice';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};
  // Explanation of differences between const, let, and var

  // var is function-scoped and can be re-declared and updated
  var exampleVar = 'I am a var';
  exampleVar = 'I can be updated';
  var exampleVar = 'I can be re-declared';

  // let is block-scoped and can be updated but not re-declared within the same scope
  let exampleLet = 'I am a let';
  exampleLet = 'I can be updated';
  // let exampleLet = 'I cannot be re-declared'; // This would cause an error

  // const is block-scoped and cannot be updated or re-declared
  const exampleConst = 'I am a const';
  // exampleConst = 'I cannot be updated'; // This would cause an error
  // const exampleConst = 'I cannot be re-declared'; // This would cause an error
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
// Example usage of userSlice in a Redux store setup


const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { store };



const LoginComponent = () => {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.user);

  const handleLogin = async (credentials) => {
    dispatch(loginStart());
    try {
      const user = await fakeApiLogin(credentials);
      dispatch(loginSuccess(user));
    } catch (err) {
      dispatch(loginFailure(err.toString()));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => handleLogin({ username: 'test', password: 'password' })}>
          Login
        </button>
      )}
    </div>
  );
};

const fakeApiLogin = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.username === 'test' && credentials.password === 'password') {
        resolve({ name: 'Test User' });
      } else {
        reject('Invalid credentials');
      }
    }, 1000);
  });
};

export default LoginComponent;

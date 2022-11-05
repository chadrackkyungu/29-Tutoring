import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: "",
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    Login: (state, action) => {
      state.users = action.payload
    },
  },
});

export const userDetails = (state) => state.users.users
export const { Login } = userSlice.actions;
export default userSlice.reducer;
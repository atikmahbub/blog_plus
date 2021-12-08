import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  authenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.username = action.payload.username;
      state.authenticated = true;
    },
    logout: (state) => {
      state.username = "";
      state.authenticated = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;

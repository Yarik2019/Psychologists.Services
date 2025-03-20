import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state) {
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, () => initialState)
      .addMatcher(
        isAnyOf(registerUser.pending, loginUser.pending, logoutUser.pending),
        (state) => {
          state.isRefreshing = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(registerUser.rejected, loginUser.rejected, logoutUser.rejected),
        (state) => {
          state.isRefreshing = false;
          state.error = true;
        }
      )
      .addMatcher(
        isAnyOf(
          registerUser.fulfilled,
          loginUser.fulfilled,
          logoutUser.fulfilled
        ),
        (state) => {
          state.isRefreshing = false;
          state.error = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;

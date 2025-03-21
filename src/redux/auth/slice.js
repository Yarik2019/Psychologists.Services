import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser } from "./operations";

const initialState = {
  user: null, // Теперь храним только необходимые данные
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, () => initialState) // При выходе обнуляем состояние
      .addMatcher(
        isAnyOf(registerUser.pending, loginUser.pending, logoutUser.pending),
        (state) => {
          state.isRefreshing = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(registerUser.rejected, loginUser.rejected, logoutUser.rejected),
        (state, action) => {
          state.isRefreshing = false;
          state.error = action.payload;
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
          state.error = null;
        }
      );
  },
});

export const authReducer = authSlice.reducer;

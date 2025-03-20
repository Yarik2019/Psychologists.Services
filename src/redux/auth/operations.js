import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../service/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { errToast, successfullyToast } from "../../utils/toast";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    const { name, email, password } = credentials;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      successfullyToast("Successful registration");
      return userCredential;
    } catch (error) {
      errToast(`Error: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    const { email, password } = credentials;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      successfullyToast("Successful Login");
      return userCredential;
    } catch (error) {
      errToast(`Error: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const logout = await signOut(auth);
      successfullyToast("Goodbye");
      return logout;
    } catch (error) {
      errToast(`Error: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

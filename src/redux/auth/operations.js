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
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });

      successfullyToast("Successful registration");

      return {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
      }; // Возвращаем только сериализуемые данные
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
      const user = userCredential.user;

      successfullyToast("Successful Login");

      return {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
      }; // Возвращаем только сериализуемые данные
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
      await signOut(auth);
      successfullyToast("Goodbye");
      return null; // При выходе не передаем никаких данных
    } catch (error) {
      errToast(`Error: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

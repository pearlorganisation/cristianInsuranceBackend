import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";

export const login = createAsyncThunk(async (payload, { rejectWithValue }) => {
  try {
    const { data } = await instance.post(
      "/login",
      { payload },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    rejectWithValue(error.message);
  }
});

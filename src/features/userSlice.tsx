import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type AxiosError } from "axios";

import { type UserProfileResponseDto } from "../api/api";
import { type ApiError } from "../api/apiError";
import { api } from "../utils/api";

interface InitialStateType {
  user: null | UserProfileResponseDto;
  isLoading: boolean;
}

const initialState: InitialStateType = {
  user: null,
  isLoading: false,
};

export const getProfile = createAsyncThunk<
  UserProfileResponseDto,
  undefined,
  { rejectValue: AxiosError<ApiError> }
>("auth/profile", async () => {
  try {
    const { data } = await api.get("/auth/me");

    return data;
  } catch (err) {
    console.log(err);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      });
  },
});

export const { resetUser, setUser } = userSlice.actions;

export default userSlice.reducer;

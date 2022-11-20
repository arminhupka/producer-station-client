import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { GetProfileResponseDto } from "../api/api";
import { ApiError } from "../api/apiError";
import { api } from "../utils/api";

interface InitialStateType {
  user: null | GetProfileResponseDto;
  isLoading: boolean;
}

const initialState: InitialStateType = {
  user: null,
  isLoading: false,
};

export const getProfile = createAsyncThunk<GetProfileResponseDto, undefined, { rejectValue: AxiosError<ApiError> }>(
  "auth/profile",
  async () => {
    try {
      const { data } = await api.get("/auth/profile", {
        withCredentials: true,
      });

      return data;
    } catch (err) {
      console.log(err);
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.user = null;
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

export const { resetUser } = userSlice.actions;

export default userSlice.reducer;

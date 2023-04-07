import { createSlice } from "@reduxjs/toolkit";

import { GetVendorAllLabelsDto } from "../api/api";

interface InitialStateType {
  labels: GetVendorAllLabelsDto[];
  isLoading: boolean;
}

const initialState: InitialStateType = {
  labels: [],
  isLoading: false,
};

const labelsSlice = createSlice({
  name: "labels",
  initialState,
  reducers: {
    setAllLabels: (state, action) => {
      state.labels = action.payload;
    },
  },
});

export const { setAllLabels } = labelsSlice.actions;

export default labelsSlice.reducer;

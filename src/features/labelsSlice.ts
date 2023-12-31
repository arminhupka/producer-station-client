import { createSlice } from "@reduxjs/toolkit";

import { type GetVendorAllLabelsDto } from "../api/api-types";

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

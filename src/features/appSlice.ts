import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isFullMenu: boolean;
}

const initialState: InitialStateType = {
  isFullMenu: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMenuFull: (state, action) => {
      state.isFullMenu = action.payload;
    },
  },
});

export const { setMenuFull } = appSlice.actions;

export default appSlice.reducer;

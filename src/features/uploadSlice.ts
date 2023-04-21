import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type UploadTypeEnum } from "../enum/UploadTypeEnum";

export interface IUploadNode {
  id: number;
  custom_name?: string;
  type: UploadTypeEnum;
  uploaded: number;
}

interface InitialStateType {
  nodes: IUploadNode[];
}

const initialState: InitialStateType = {
  nodes: [],
};

const uploadSlice = createSlice({
  name: "uploads",
  initialState,
  reducers: {
    createUploadNode: (state, { payload }: PayloadAction<IUploadNode>) => {
      state.nodes.push(payload);
    },
    setUploadProgress: (
      state,
      { payload }: PayloadAction<{ id: number; progress: number }>,
    ) => {
      const updObj = state.nodes.findIndex((obj) => obj.id === payload.id);
      state.nodes[updObj].uploaded = payload.progress;
    },
    deleteNode: (state, { payload }: PayloadAction<{ id: number }>) => {
      state.nodes = state.nodes.filter((n) => n.id !== payload.id);
    },
  },
});

export const { createUploadNode, setUploadProgress } = uploadSlice.actions;

export default uploadSlice.reducer;

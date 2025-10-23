import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface HairHealthSliceProps {
  stage: string;
  familyHairlossHistory: string;
  dandruffStatus: string;
}

const initialState: HairHealthSliceProps = {
  stage: "",
  familyHairlossHistory: "",
  dandruffStatus: "",
};

const hairHealthQuestionSlice = createSlice({
  name: "hair-health",
  initialState,
  reducers: {
    updateStage(state, action: PayloadAction<string>) {
      state.stage = action.payload;
    },
    updateFamilyHairlossHistory(state, action: PayloadAction<string>) {
      state.familyHairlossHistory = action.payload;
    },
    updateDandruffStatus(state, action: PayloadAction<string>) {
      state.dandruffStatus = action.payload;
    },
  },
});

export const {
  updateStage,
  updateDandruffStatus,
  updateFamilyHairlossHistory,
} = hairHealthQuestionSlice.actions;
export default hairHealthQuestionSlice.reducer;

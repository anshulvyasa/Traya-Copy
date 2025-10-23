import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface InternalHealthProps {
  sleepStatus: string;
  stressStatus: string;
  constipatedStatus: string;
  gasAcidityBloatingStatus: string;
  energyLevelStatus: string;
  supplimentStatus: string;
}

const initialState: InternalHealthProps = {
  sleepStatus: "",
  stressStatus: "",
  constipatedStatus: "",
  gasAcidityBloatingStatus: "",
  energyLevelStatus: "",
  supplimentStatus: "",
};

const internalHealthSlice = createSlice({
  name: "internal-health",
  initialState,
  reducers: {
    updateSleepStatus(state, action: PayloadAction<string>) {
      state.sleepStatus = action.payload;
    },
    updateStressStatus(state, action: PayloadAction<string>) {
      state.stressStatus = action.payload;
    },
    updateConstipatedStatus(state, action: PayloadAction<string>) {
      state.constipatedStatus = action.payload;
    },
    updateGasAcidityBloatingStatus(state, action: PayloadAction<string>) {
      state.gasAcidityBloatingStatus = action.payload;
    },
    updateEnergyLevelStatus(state, action: PayloadAction<string>) {
      state.energyLevelStatus = action.payload;
    },
    updateSupplimentStatus(state, action: PayloadAction<string>) {
      state.supplimentStatus = action.payload;
    },
  },
});

export const {
  updateSleepStatus,
  updateConstipatedStatus,
  updateEnergyLevelStatus,
  updateGasAcidityBloatingStatus,
  updateStressStatus,
  updateSupplimentStatus,
} = internalHealthSlice.actions;
export default internalHealthSlice.reducer;

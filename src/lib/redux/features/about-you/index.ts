import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const Gender = {
  MALE: "MALE",
  FEMALE: "FEMALE",
} as const;

export type Gender = (typeof Gender)[keyof typeof Gender];

export type AboutYou = {
  name: string;
  phone: string;
  age: string;
  gender: Gender;
};

const initialState: AboutYou = {
  name: "",
  phone: "",
  age: "",
  gender: Gender.MALE,
};

const aboutYouSlice = createSlice({
  name: "about-you",
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    updatePhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    updateAge(state, action: PayloadAction<string>) {
      state.age = action.payload;
    },
    updateGender(state, action: PayloadAction<Gender>) {
      state.gender = action.payload;
    },
  },
});

export const { updateName, updatePhone, updateAge, updateGender } =
  aboutYouSlice.actions;
export default aboutYouSlice.reducer;

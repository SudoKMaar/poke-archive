import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoading: true,
  userInfo: undefined,
  toasts: [],
  currentPokemonTab: "description",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUserStatus: (state, action) => {
      state.userInfo = action.payload;
    },
    setToast: (state, action) => {
      state.toasts.push(action.payload);
    },
    clearToasts: (state) => {
      state.toasts = [];
    },
    setPokemonTab: (state, action) => {
      state.currentPokemonTab = action.payload;
    },
  },
});

export const {
  setLoading,
  setUserStatus,
  setToast,
  clearToasts,
  setPokemonTab,
} = appSlice.actions;

export default appSlice.reducer;

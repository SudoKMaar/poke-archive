import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./slices/AppSlice";
import { pokemonSlice } from "./slices/PokemonSlice";

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    pokemon: pokemonSlice.reducer,
  },
});
export const AppDispatch = store.dispatch;
export const RootState = store.getState;
export const AppThunk = (thunk) => (dispatch, getState, extraArgument) => {
  return thunk(dispatch, getState, extraArgument);
};

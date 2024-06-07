import { createSlice } from "@reduxjs/toolkit";
import { fetchAccessoriesData } from "./API";

const accessoriesSlice = createSlice({
  name: "accessories",
  initialState: { accessoriesData: [], axesuarsData: {array:[], index: 1} },
  reducers: {
    axesuarsPaginationWork (state, {payload}) {
      state.axesuarsData.index = payload;
      state.axesuarsData.array = state.accessoriesData.slice((state.axesuarsData.index-1)*18 + 1, (state.axesuarsData.index-1)*18 + 19)
    },
    axesuarsPaginationToRight(state, {payload}){
      if(state.axesuarsData.index === 25) {
        state.axesuarsData.index = 1
      }
      else {state.axesuarsData.index += 1;}
      state.axesuarsData.array = state.accessoriesData.slice((state.axesuarsData.index-1)*18 + 1, (state.axesuarsData.index-1)*18 + 19)
    },
    axesuarsPaginationToLeft(state, {payload}){
      if(state.axesuarsData.index === 1) {
        state.axesuarsData.index = 25
      }
      else {state.axesuarsData.index -= 1;}
      state.axesuarsData.array = state.accessoriesData.slice((state.axesuarsData.index-1)*18 + 1, (state.axesuarsData.index-1)*18 + 19)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAccessoriesData.fulfilled, (state, { payload }) => {
      return {
        ...state,
        accessoriesData: payload,
        axesuarsData: {index: state.axesuarsData.index, array: payload.slice((state.axesuarsData.index-1)*18 + 1, (state.axesuarsData.index-1)*18 + 19)}
      };
    });
  },
});

export const axesuarsReducer = accessoriesSlice.reducer;
export const selectOaxesuars = (state) => state.accessories;
export const {axesuarsPaginationWork, axesuarsPaginationToRight, axesuarsPaginationToLeft} = accessoriesSlice.actions;

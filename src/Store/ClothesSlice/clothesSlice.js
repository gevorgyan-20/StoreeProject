import { createSlice } from "@reduxjs/toolkit";
import { fetchClothesData } from "./API";

const clothesSlice = createSlice({
  name: "clothes",
  initialState: {
    clothesData: [],
    odejdaData: { array: [], index: 1 },
    asideFilterData: { price: null, category: null, gender: null, color: null, sale: null },
    filterData: { array: [], renderingArray: [], isFiltering: false },
  },
  reducers: {
    odejdaPaginationWork(state, { payload }) {
      state.odejdaData.index = payload;
      state.odejdaData.array = state.clothesData.slice((state.odejdaData.index - 1) * 18 + 1, (state.odejdaData.index - 1) * 18 + 19);
    },
    odejdaPaginationToRight(state, { payload }) {
      if (state.odejdaData.index === 25) {
        state.odejdaData.index = 1;
      } else {
        state.odejdaData.index += 1;
      }
      state.odejdaData.array = state.clothesData.slice((state.odejdaData.index - 1) * 18 + 1, (state.odejdaData.index - 1) * 18 + 19);
    },
    odejdaPaginationToLeft(state, { payload }) {
      if (state.odejdaData.index === 1) {
        state.odejdaData.index = 25;
      } else {
        state.odejdaData.index -= 1;
      }
      state.odejdaData.array = state.clothesData.slice((state.odejdaData.index - 1) * 18 + 1, (state.odejdaData.index - 1) * 18 + 19);
    },
    getOdejdaAsideFilterData(state, { payload }) {
      state.asideFilterData = payload;
    },
    filteringOdejda(state, { payload }) {
      let count1 = 0;
      for(let key in state.asideFilterData) {
        if (state.asideFilterData[key]) {
          count1++;
        }
      }

      state.clothesData.map((el) => {
        let count2 = 0;
        for(let key in state.asideFilterData) {
          if(state.asideFilterData[key] === el[key]) {
            count2++;
          }
        }
        if(count2 === count1) {
          state.filterData.array.push(el);
        }
      });
      state.filterData.isFiltering = true;
      state.filterData.renderingArray = state.filterData.array.slice(1, 19);
    },
    closeFilteringOdejda(state, { payload }) {
      state.filterData.isFiltering = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClothesData.fulfilled, (state, { payload }) => {
      return {
        ...state,
        clothesData: payload,
        odejdaData: {
          index: state.odejdaData.index,
          array: payload.slice((state.odejdaData.index - 1) * 18 + 1, (state.odejdaData.index - 1) * 18 + 19),
        },
      };
    });
  },
});

export const odejdaReducer = clothesSlice.reducer;
export const selectOdejda = (state) => state.clothes;
export const {
  odejdaPaginationWork,
  odejdaPaginationToRight,
  odejdaPaginationToLeft,
  getOdejdaAsideFilterData,
  filteringOdejda,
  closeFilteringOdejda,
} = clothesSlice.actions;

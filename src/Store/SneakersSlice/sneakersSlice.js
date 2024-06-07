import { createSlice } from "@reduxjs/toolkit";
import { fetchSneakersData } from "./API";

const sneakersSlice = createSlice({
  name: "sneakers",
  initialState: {
    sneakersData: [],
    slidersData: [],
    krasovkiData: { array: [], index: 1 },
    asideFilterData: { category: null, size: [], season: null, price: null, color: null, brand: null, sale: null },
    filterData: { array: [], renderingArray: [], isFiltering: false},
  },
  reducers: {
    krasovkiPaginationWork(state, { payload }) {
      state.krasovkiData.index = payload;
      state.krasovkiData.array = state.sneakersData.slice((state.krasovkiData.index - 1) * 18 + 1, (state.krasovkiData.index - 1) * 18 + 19);
    },
    krasovkiPaginationToRight(state, { payload }) {
      if (state.krasovkiData.index === 25) {
        state.krasovkiData.index = 1;
      } else {
        state.krasovkiData.index += 1;
      }
      state.krasovkiData.array = state.sneakersData.slice((state.krasovkiData.index - 1) * 18 + 1, (state.krasovkiData.index - 1) * 18 + 19);
    },
    krasovkiPaginationToLeft(state, { payload }) {
      if (state.krasovkiData.index === 1) {
        state.krasovkiData.index = 25;
      } else {
        state.krasovkiData.index -= 1;
      }
      state.krasovkiData.array = state.sneakersData.slice((state.krasovkiData.index - 1) * 18 + 1, (state.krasovkiData.index - 1) * 18 + 19);
    },
    getAsideFilterData(state, { payload }) {
      state.asideFilterData = payload;
    },
    filteringShoes(state, { payload }) {
      let count1 = 0;
      for(let key in state.asideFilterData) {
        if(key === "size") {
          if(state.asideFilterData[key].length > 0) {count1++}
        }
        else if(state.asideFilterData[key]) {
          count1++
        }
      }
      
      state.sneakersData.map((el) => {
        let count2 = 0;
        for(let key in state.asideFilterData) {
          if(key === "size") {
            
          }
          else if(state.asideFilterData[key] === el[key]) {
            count2++
          }
        }
        if(count2 === count1) {
          state.filterData.array.push(el)
        }
      })
      state.filterData.isFiltering = true
      state.filterData.renderingArray = state.filterData.array.slice(1, 19)
    },
    closeFilteringShoes(state, { payload }) {
      state.filterData.isFiltering = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSneakersData.fulfilled, (state, { payload }) => {
      return {
        ...state,
        sneakersData: payload,
        slidersData: payload.slice(22, 41),
        krasovkiData: {
          index: state.krasovkiData.index,
          array: payload.slice((state.krasovkiData.index - 1) * 18 + 1, (state.krasovkiData.index - 1) * 18 + 19),
        },
        asideFilterData: state.asideFilterData,
        filterData: state.filterData,
      };
    });
  },
});

export const sneakersReducer = sneakersSlice.reducer;
export const selectSneakers = (state) => state.sneakers;
export const { krasovkiPaginationWork, krasovkiPaginationToRight, krasovkiPaginationToLeft, getAsideFilterData, filteringShoes, closeFilteringShoes } = sneakersSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import { sneakersReducer } from "./SneakersSlice/sneakersSlice";
import { odejdaReducer } from "./ClothesSlice/clothesSlice";
import { axesuarsReducer } from "./AccessoriesSlice/accessoriesSlice";

const store = configureStore({
  reducer: {
    sneakers: sneakersReducer,
    clothes: odejdaReducer,
    accessories: axesuarsReducer,
  },
});

export default store
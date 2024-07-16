import { createAsyncThunk } from "@reduxjs/toolkit";
import UseRequest from "../../Hook/useRequest";

const {get} = UseRequest()
export const fetchClothesData = createAsyncThunk("clothes/fetchClothesData", async() => {
    const res = await get("https://run.mocky.io/v3/9fd8f710-246d-40f8-b67e-3595c2f9672a");
    return res;
});

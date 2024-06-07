import { createAsyncThunk } from "@reduxjs/toolkit";
import UseRequest from "../../Hook/useRequest";

const {get} = UseRequest()
export const fetchClothesData = createAsyncThunk("clothes/fetchClothesData", async() => {
    const res = await get("http://localhost:3005/clothingsData");
    return res;
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import UseRequest from "../../Hook/useRequest";

const {get} = UseRequest()
export const fetchAccessoriesData = createAsyncThunk("accessories/fetchAccessoriesData", async() => {
    const res = await get("https://run.mocky.io/v3/3f6937ae-8c92-4537-a1c0-167d0ac81b7c");
    return res;
});

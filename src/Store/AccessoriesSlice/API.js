import { createAsyncThunk } from "@reduxjs/toolkit";
import UseRequest from "../../Hook/useRequest";

const {get} = UseRequest()
export const fetchAccessoriesData = createAsyncThunk("accessories/fetchAccessoriesData", async() => {
    const res = await get("http://localhost:3005/accessoriesData");
    return res;
});

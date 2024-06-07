import { createAsyncThunk } from "@reduxjs/toolkit";
import UseRequest from "../../Hook/useRequest";

const {get} = UseRequest()
export const fetchSneakersData = createAsyncThunk("sneakers/fetchSneakersData", async() => {
    const res = await get("http://localhost:3005/sneakersData");
    return res;
});

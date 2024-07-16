import { createAsyncThunk } from "@reduxjs/toolkit";
import UseRequest from "../../Hook/useRequest";

const {get} = UseRequest()
export const fetchSneakersData = createAsyncThunk("sneakers/fetchSneakersData", async() => {
    const res = await get("https://run.mocky.io/v3/03a20448-2215-446d-b98e-c2669a3c1841");
    return res;
});

import {createAsyncThunk} from "@reduxjs/toolkit"

import axios from "axios"

export const deleteShoppingThunk = createAsyncThunk("shopping/delete", async (id) => {
    try {
        await axios.delete(`/api/shopping-lists/${id}`);
        return id;
    } catch(error) {
        console.log(error.message);
        throw error;
    }
});

export const getShoppingThunk = createAsyncThunk("shopping/get", async () => {
    try {
        const {data} = await axios.get("/api/shopping-lists")
        console.log(data)
        return data.data
    } catch(error) {
        console.log(error.message)
    }
})

export const addShoppingThunk = createAsyncThunk("contacts/post", async(credentials) =>{
    try {
        const {data} = await axios.post("/api/shopping-lists", credentials)
        return data.data 
    } catch (error) {
        console.log(error.message)
    }
})

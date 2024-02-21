import {createAsyncThunk} from "@reduxjs/toolkit"

import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5000/api', 
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const deleteShoppingThunk = createAsyncThunk("shopping/delete", async (id) => {
    try {
        await instance.delete(`/shopping-lists/${id}`);
        return id;
    } catch(error) {
        console.log(error.message);
        throw error;
    }
});

export const getShoppingThunk = createAsyncThunk("shopping/get", async () => {
    try {
        const {data} = await instance.get("/shopping-lists")
        console.log(data)
        return data.data
    } catch(error) {
        console.log(error.message)
    }
})

export const addShoppingThunk = createAsyncThunk("contacts/post", async(credentials) =>{
    try {
        const {data} = await instance.post("/shopping-lists", credentials)
        return data.data 
    } catch (error) {
        console.log(error.message)
    }
})

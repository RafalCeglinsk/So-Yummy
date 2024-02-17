import {createAsyncThunk} from "@reduxjs/toolkit"

import axios from "axios"

export const deleteShoppingThunk = createAsyncThunk("shopping/delete", async (id) => {
    try {
        const {data} = await axios.delete(`/api/shopping-list/${id}`)
        return id
    } catch(error) {
        console.log(error.message)
    }
})

export const getShoppingThunk = createAsyncThunk("shopping/get", async () => {
    try {
        const {data} = await axios.get("/api/shopping-list")
        return data.data
    } catch(error) {
        console.log(error.message)
    }
})

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}
const getProducts = createAsyncThunk("products/getProducts", async () => {
    
})
const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        
    }
})
export default productSlice.reducer;
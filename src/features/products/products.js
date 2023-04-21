import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts ,postProduct} from "./productAPI";

const initialState = {
    products: [],
    isLoading: false,
    postSuccess: false,
    isError: false,
    error:""

}
export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const products = fetchProducts();
    return products;
})
export const addProducts = createAsyncThunk("products/addProducts", async (data) => {
    const products = postProduct(data);
    return products;
})
const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        })
        
            .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isError = false; //this line isn't important!!
            state.isLoading=false;
        })
           .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error=action.error.message
            }).addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        })
            .addCase(addProducts.fulfilled, (state, action) => {
                state.postSuccess = true;
                state.isError = false; //this line isn't important!!
            state.isLoading=false;
            })
            .addCase(addProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.postSuccess=false
                state.isError = true;
                state.error=action.error.message
            }).addCase(addProducts.pending, (state, action) => {
                state.isLoading = true;
                state.postSuccess = false;
                state.isError = false;
            })
 }
})
export default productSlice.reducer;
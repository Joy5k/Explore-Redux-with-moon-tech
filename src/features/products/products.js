import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProduct, fetchProducts ,postProduct} from "./productAPI";

const initialState = {
    products: [],
    isLoading: false,
    postSuccess: false,
    deleteSuccess: false,
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


export const removeProduct = createAsyncThunk("products/removeProduct",
    async (id,thunkAPI) => {
        const products =await deleteProduct(id);
        thunkAPI.dispatch(removeFromProduct(id))
    return products;
})


const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        togglePostSuccess: (state) => {
            state.postSuccess=false;
        },
        toggleDeleteSuccess: (state) => {
            state.deleteSuccess=false;
        },
        removeFromProduct:(state,action) =>{
state.products = state.products.filter(product =>product._id !== action.payload
            );
       },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
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
            })
            .addCase(addProducts.fulfilled, (state) => {
            state.postSuccess=true
                    state.isError = false; //this line isn't important!!
            state.isLoading=false;
            }).addCase(addProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.postSuccess=false
                state.isError = true;
                state.error=action.error.message
            }).addCase(addProducts.pending, (state) => {
                state.isLoading = true;
                state.postSuccess = false;
                state.isError = false;
            }).addCase(removeProduct.pending, (state) => {
                state.isLoading = true;
                state.deleteSuccess = false;
                state.isError = false;
            }).addCase(removeProduct.fulfilled, (state) => {
            state.deleteSuccess=true
            state.isLoading=false;
            }).addCase(removeProduct.rejected, (state, action) => {
                state.products = [];
                state.isLoading = false;
                state.deleteSuccess=false
                state.isError = true;
                state.error=action.error.message
            })
 }
})
export const {togglePostSuccess,toggleDeleteSuccess,removeFromProduct}=productSlice.actions;
export default productSlice.reducer;
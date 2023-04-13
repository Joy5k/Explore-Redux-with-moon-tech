import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}

const cartSLice = createSlice({
    name: 'cart',
    initialState,
    reducers:{}
})
export default cartSLice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}

const cartSLice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,action) => {
            state.cart.push(action.payload);
        }
    }
})
export const { addToCart } = cartSLice.actions;
export default cartSLice.reducer;
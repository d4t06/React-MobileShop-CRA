import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    category: '',
    page: 1,
    filters: '',
    sort: '',
    status: ''
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        storeProduct(state, action) {
            // console.log(action)
            state.products = action.payload.products || [];
            state.filters= action.payload.filters || '';
            state.page= action.payload.page || 1;
            state.sort= action.payload.sort || '';
            state.category= action.payload.category || '';
            state.status= action.payload.status || 'finished';
        }
    }
})

export const selectedAllStore = (state) => state.products

export const { storeProduct } = productsSlice.actions

export default productsSlice.reducer

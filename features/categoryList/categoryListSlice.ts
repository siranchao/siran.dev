import { createSlice } from "@reduxjs/toolkit";

const initState = {
    currentPage: 1,
    order: "newest"
};

const categoryListSlice = createSlice({
    name: "categoryList",
    initialState: initState,
    reducers: {
        reset: (state) => {
            state.currentPage = 1;
            state.order = "newest";
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        }
    }
})

export const { reset, setCurrentPage, setOrder } = categoryListSlice.actions

export default categoryListSlice.reducer

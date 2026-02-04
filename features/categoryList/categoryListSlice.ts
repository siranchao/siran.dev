import { createSlice } from "@reduxjs/toolkit";

const initState = {
    currentPage: 1,
    order: "newest",
    search: ""
};

const categoryListSlice = createSlice({
    name: "categoryList",
    initialState: initState,
    reducers: {
        reset: (state) => {
            state.currentPage = 1;
            state.order = "newest";
            state.search = "";
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    }
})

export const { reset, setCurrentPage, setOrder, setSearch } = categoryListSlice.actions

export default categoryListSlice.reducer

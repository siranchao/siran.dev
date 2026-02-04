import { createSlice } from "@reduxjs/toolkit";

const initState = {
    currentPage: 1,
    tag: "all",
    order: "newest",
    search: ""
};

const fullListSlice = createSlice({
    name: "fullList",
    initialState: initState,
    reducers: {
        reset: (state) => {
            state.currentPage = 1;
            state.tag = "all";
            state.order = "newest";
            state.search = "";
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setTag: (state, action) => {
            state.tag = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    }
})

export const { reset, setCurrentPage, setTag, setOrder, setSearch } = fullListSlice.actions

export default fullListSlice.reducer

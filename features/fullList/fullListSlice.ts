import { createSlice } from "@reduxjs/toolkit";

const initState = {
    currentPage: 1,
    tag: "all",
    order: "newest"
};

const fullListSlice = createSlice({
    name: "fullList",
    initialState: initState,
    reducers: {
        reset: (state) => {
            state.currentPage = 1;
            state.tag = "all";
            state.order = "newest";
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setTag: (state, action) => {
            state.tag = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        }
    }
})

export const { reset, setCurrentPage, setTag, setOrder } = fullListSlice.actions

export default fullListSlice.reducer

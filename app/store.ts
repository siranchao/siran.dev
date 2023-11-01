import { configureStore } from "@reduxjs/toolkit";
import fullListSlice from "@/features/fullList/fullListSlice";
import categoryListSlice from "@/features/categoryList/categoryListSlice";

export const store = configureStore({
    reducer: {
        fullList: fullListSlice,
        categoryList: categoryListSlice
    },
})
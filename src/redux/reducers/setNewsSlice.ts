import { createSlice } from "@reduxjs/toolkit";

import { TNewsState } from "../../types/TNewsState";

const initialState: TNewsState = {
    news: [],
    isLoading: false,
    lastId: null,
    isNews: true
}

export const setNewsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        loadingNews: (state) => {
            state.isLoading = true;
        },
        setNews: (state, action) => {
            state.isLoading = false;
            state.news = [...state.news, ...action.payload]
            if (action.payload.length !== 0) state.lastId = action.payload[action.payload.length - 1].id;
            if (action.payload.length < 5) state.isNews = false;
        }
    },
})

export const {
    loadingNews,
    setNews
} = setNewsSlice.actions;

export default setNewsSlice.reducer;

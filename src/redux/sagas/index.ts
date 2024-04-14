import { put, retry, spawn, takeLatest } from "redux-saga/effects";
import { GET_NEWS_FIRST_LIST, GET_NEWS_NEXT } from "../actions/actionTypes";
import { fetchFirstNewsList, fetchNextNewsList } from "../../API";
import { loadingNews, setNews } from "../reducers/setNewsSlice";
import { TObjectNews } from "../../types/TObjectNews";
import { PayloadAction } from "@reduxjs/toolkit";

function *handleGetFirstNews() {
    yield put(loadingNews());
    try {
        const retryDelay = 3 * 1000;
        const data: TObjectNews[] = yield retry(Infinity, retryDelay, fetchFirstNewsList);
        yield put(setNews(data));
    } catch (error: unknown) {
        if ( error instanceof Error) {
            const { message } = error;
            console.log(message);
        }        
    }
}

function* watchGetFirstNews() {
    yield takeLatest(GET_NEWS_FIRST_LIST, handleGetFirstNews);
}


function *handleGetNewsNext(action: PayloadAction<string>) {
    yield put(loadingNews());
    try {
        const retryDelay = 3 * 1000;
        const data: TObjectNews[] = yield retry(Infinity, retryDelay, fetchNextNewsList, action.payload);
        yield put(setNews(data));
    } catch (error: unknown) {
        if ( error instanceof Error) {
            const { message } = error;
            console.log(message);
        }        
    }
}

function* watchGetNewsNext() {
    yield takeLatest(GET_NEWS_NEXT, handleGetNewsNext)
}

export default function* saga() {
    yield spawn(watchGetFirstNews);
    yield spawn(watchGetNewsNext);
}

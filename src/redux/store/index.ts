import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import setNewsReducer from "../reducers/setNewsSlice"

import saga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        news: setNewsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(saga)

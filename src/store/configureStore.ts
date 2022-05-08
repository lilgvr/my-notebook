import {configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const persistedStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false})
});

export const store = configureStore({reducer: rootReducer});

export const persist = persistStore(persistedStore);
import {configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
    key: "root",
    storage
}

export const serverUrl = 'http://localhost:8080';

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const persistedStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});

export const store = configureStore({reducer: rootReducer});

export const persistor = persistStore(persistedStore);
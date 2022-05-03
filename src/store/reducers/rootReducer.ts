import categoryReducer from "./categoryReducer";
import {combineReducers} from "redux";
import noteReducer from "./noteReducer";

const rootReducer = combineReducers({category: categoryReducer, note: noteReducer});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;

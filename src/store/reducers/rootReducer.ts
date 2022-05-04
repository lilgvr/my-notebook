import categoryReducer from "./categoryReducer";
import {combineReducers} from "redux";
import noteReducer from "./noteReducer";
import restNoteReducer from "./restNoteReducer";
import restCategoryReducer from "./restCategoryReducer";

const rootReducer = combineReducers({
    category: categoryReducer,
    note: noteReducer,
    restNote: restNoteReducer,
    restCategory: restCategoryReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;

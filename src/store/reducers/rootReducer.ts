import {combineReducers} from "redux";
import restNoteReducer from "./restNoteReducer";
import restCategoryReducer from "./restCategoryReducer";

const rootReducer = combineReducers({
    noteRest: restNoteReducer,
    categoryRest: restCategoryReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;

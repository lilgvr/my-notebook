import {INotebookState} from "../types";
import {initialState} from "../initialState";
import {Action} from "redux";

const combinedReducer = (state: INotebookState = initialState, action: Action): INotebookState => {
    switch (action.type) {
        default:
            return state;
    }
}
import {Action} from "redux";

export interface ICategoryAction extends Action {
    type: CategoryActions,
    payload: string
}

export enum CategoryActions {
    ADD_CATEGORY = "ADD_CATEGORY",
    REMOVE_CATEGORY = "REMOVE_CATEGORY",
    CLEAR_NOTES = "CLEAR_NOTES",
    CLEAN_CATEGORIES = "CLEAN_CATEGORIES"
}
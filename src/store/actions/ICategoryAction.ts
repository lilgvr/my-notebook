import {Action} from "redux";
import {ICategory} from "../types";

export interface ICategoryAction extends Action {
    type: CategoryActions,
    payload: ICategory
}

export enum CategoryActions {
    ADD_CATEGORY = "category/add",
    REMOVE_CATEGORY = "category/remove",
    CLEAN_CATEGORIES = "category/clean",
    RESET_CATEGORIES = "category/reset"
}
import {Action} from "redux";
import {ICategory} from "../types";

export interface ICategoryAction extends Action {
    type: CategoryActions,
    payload: ICategory[]
}

export enum CategoryActions {
    GET_CATEGORY_REQUESTED = "category/GetRequested",
    GET_CATEGORY_DONE = "category/GetDone",
    GET_CATEGORIES_FAILED = "category/GetFailed",

    POST_CATEGORY_SENT = "category/PostSent",
    POST_CATEGORY_DONE = "category/PostDone",
    POST_CATEGORY_FAILED = "category/PostFailed",

    POST_CATEGORY_CLEAN_SENT = "category/PostCleanSent",
    POST_CATEGORY_CLEAN_DONE = "category/PostCleanDone",
    POST_CATEGORY_CLEAN_FAILED = "category/PostCleanFailed",

}
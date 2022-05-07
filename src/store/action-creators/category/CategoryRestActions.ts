import {CategoryActions, ICategoryAction} from "../../actions/ICategoryAction";
import {ICategory} from "../../types";

export function GetRequested(): ICategoryAction {
    return {
        type: CategoryActions.GET_CATEGORY_REQUESTED,
        payload: []
    }
}

export function GetDone(payload: ICategory[]): ICategoryAction {
    return {
        type: CategoryActions.GET_CATEGORY_DONE,
        payload: payload
    }
}

export function GetFailed(): ICategoryAction {
    return {
        type: CategoryActions.GET_CATEGORIES_FAILED,
        payload: []
    }
}

export function PostSent(): ICategoryAction {
    return {
        type: CategoryActions.POST_CATEGORY_SENT,
        payload: []
    }
}

export function PostDone(payload: ICategory[]): ICategoryAction {
    return {
        type: CategoryActions.POST_CATEGORY_DONE,
        payload: payload
    }
}

export function PostFailed(): ICategoryAction {
    return {
        type: CategoryActions.POST_CATEGORY_FAILED,
        payload: []
    }
}
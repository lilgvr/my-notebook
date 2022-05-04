import {IRestCategoryAction, RestCategoryActions} from "../../actions/IRestCategoryAction";

export function GetRequested(): IRestCategoryAction {
    return {
        type: RestCategoryActions.GET_CATEGORIES_REQUESTED,
        payload: []
    }
}

export function GetDone(payload: string[]): IRestCategoryAction {
    return {
        type: RestCategoryActions.GET_CATEGORIES_DONE,
        payload: payload
    }
}

export function GetFailed(): IRestCategoryAction {
    return {
        type: RestCategoryActions.GET_CATEGORIES_FAILED,
        payload: []
    }
}

export function PostSent(): IRestCategoryAction {
    return {
        type: RestCategoryActions.POST_CATEGORIES_SENT,
        payload: []
    }
}

export function PostDone(payload: string[]): IRestCategoryAction {
    return {
        type: RestCategoryActions.POST_CATEGORIES_DONE,
        payload: payload
    }
}

export function PostFailed(): IRestCategoryAction {
    return {
        type: RestCategoryActions.POST_CATEGORIES_FAILED,
        payload: []
    }
}
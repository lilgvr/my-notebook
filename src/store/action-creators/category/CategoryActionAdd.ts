import {CategoryActions, ICategoryAction} from "../../actions/ICategoryAction";

export function CategoryActionAdd(payload: string): ICategoryAction {
    return {
        type: CategoryActions.ADD_CATEGORY,
        payload: payload
    }
}
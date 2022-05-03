import {CategoryActions, ICategoryAction} from "../../actions/ICategoryAction";

export function CategoryActionRemove(payload: string): ICategoryAction {
    return {
        type: CategoryActions.REMOVE_CATEGORY,
        payload: payload
    }
}
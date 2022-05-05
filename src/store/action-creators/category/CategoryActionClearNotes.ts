import {CategoryActions, ICategoryAction} from "../../actions/ICategoryAction";

export function CategoryActionClearNotes(payload: string): ICategoryAction {
    return {
        type: CategoryActions.RESET_CATEGORIES,
        payload: payload
    }
}
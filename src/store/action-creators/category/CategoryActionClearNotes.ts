import {CategoryActions, ICategoryAction} from "../../actions/ICategoryAction";
import {ICategory} from "../../types";

export function CategoryActionClearNotes(payload: ICategory): ICategoryAction {
    return {
        type: CategoryActions.RESET_CATEGORIES,
        payload: payload
    }
}
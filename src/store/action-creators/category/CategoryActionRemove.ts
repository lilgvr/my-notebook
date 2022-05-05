import {CategoryActions, ICategoryAction} from "../../actions/ICategoryAction";
import {ICategory} from "../../types";

export function CategoryActionRemove(payload: ICategory): ICategoryAction {
    return {
        type: CategoryActions.REMOVE_CATEGORY,
        payload: payload
    }
}
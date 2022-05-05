import {CategoryActions, ICategoryAction} from "../../actions/ICategoryAction";
import {ICategory} from "../../types";

export function CategoryActionAdd(payload: ICategory): ICategoryAction {
    return {
        type: CategoryActions.ADD_CATEGORY,
        payload: payload
    }
}
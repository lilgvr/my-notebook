import {CategoryActions, ICategoryAction} from "../../actions/ICategoryAction";

export function CategoryActionClean(): ICategoryAction {
    return {
        type: CategoryActions.CLEAN_CATEGORIES,
        payload: {id: -1, title: ''}
    }
}
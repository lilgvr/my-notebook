import {CategoryActions, ICategoryAction} from "../actions/ICategoryAction";
import {removeItem} from "../../service/service";
import {initialState} from "../initialState";
import {INotebookState} from "../types";

const categoryReducer = (state: INotebookState = initialState, action: ICategoryAction): INotebookState => {
    switch (action.type) {
        case CategoryActions.ADD_CATEGORY:
            return {...state, categories: [...state.categories, action.payload]};
        case CategoryActions.REMOVE_CATEGORY:
            return {...state, categories: state.categories.filter(el => el !== action.payload)};
        case CategoryActions.CLEAR_NOTES:
            console.log(state)
            return {
                ...state,
                notes: state.notes.filter(n => n.categoryId !== state.categories.indexOf(action.payload)) // TODO удаление заметок при удалении категории
            };
        case CategoryActions.CLEAN_CATEGORIES:
            return {...state, categories: initialState.categories};
        default:
            return state;
    }
}

export default categoryReducer;
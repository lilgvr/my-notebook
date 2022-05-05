import {INotebookState, NotebookAction} from "../types";
import {initialState} from "../initialState";
import {NoteActions} from "../actions/INoteAction";
import {CategoryActions} from "../actions/ICategoryAction";

const mainReducer = (state: INotebookState = initialState, action: NotebookAction): INotebookState => {
    switch (action.type) {
        case NoteActions.ADD_NOTE:
            return (action.payload) ? {...state, notes: [...state.notes, action.payload]} : state;

        case NoteActions.REMOVE_NOTE:
            return (action.payload) ? {...state, notes: state.notes.filter(el => el !== action.payload)} : state;

        case NoteActions.CLEAN_NOTES:
            return {...state, notes: initialState.notes};

        case NoteActions.RESET_NOTES:
            return {...state};

        case CategoryActions.ADD_CATEGORY:
            return {...state, categories: [...state.categories, action.payload]};

        case CategoryActions.REMOVE_CATEGORY:
            return {...state, categories: state.categories.filter(el => el !== action.payload)};

        case CategoryActions.CLEAN_CATEGORIES:
            return {...state, categories: initialState.categories};

        case CategoryActions.RESET_CATEGORIES:
            return {
                ...state,
                notes: state.notes.filter(n => n.categoryId !== state.categories.indexOf(action.payload))
            };

        default:
            return state;
    }
}

export default mainReducer;
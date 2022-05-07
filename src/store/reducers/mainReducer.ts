import {INotebookState, NotebookAction} from "../types";
import {initialState} from "../initialState";
import {CategoryActions} from "../actions/ICategoryAction";
import {NoteActions} from "../actions/INoteAction";

const mainReducer = (state: INotebookState = initialState, action: NotebookAction): INotebookState => {
    switch (action.type) {

        case CategoryActions.GET_CATEGORY_REQUESTED:
            return {...state, isLoading: true};

        case CategoryActions.GET_CATEGORY_DONE:
            return {...state, isLoading: false, categories: action.payload};

        case CategoryActions.GET_CATEGORIES_FAILED:
            return {...state, isLoading: false, isError: true};

        case CategoryActions.POST_CATEGORY_SENT:
            return {...state, isLoading: true};

        case CategoryActions.POST_CATEGORY_DONE:
            return {...state, isLoading: false, isError: false, categories: state.categories.concat(action.payload)};

        case CategoryActions.POST_CATEGORY_FAILED:
            return {...state, isLoading: false, isError: true};

        case CategoryActions.POST_CATEGORY_CLEAN_SENT:
            return {...state, isLoading: true};

        case CategoryActions.POST_CATEGORY_CLEAN_DONE:
            return initialState;

        case CategoryActions.POST_CATEGORY_CLEAN_FAILED:
            return {...state, isLoading: false, isError: true};

        case NoteActions.GET_NOTE_REQUESTED:
            return {...state, isLoading: true};

        case NoteActions.GET_NOTE_DONE:
            return (action.payload) ?
                {...state, isLoading: false, isError: false, notes: action.payload}
                : {...state, isLoading: false, isError: false};

        case NoteActions.GET_NOTE_FAILED:
            return {...state, isLoading: false, isError: true};

        case NoteActions.POST_NOTE_SENT:
            return {...state, isLoading: true};

        case NoteActions.POST_NOTE_DONE:
            return (action.payload) ?
                {...state, isLoading: false, isError: false, notes: state.notes.concat(action.payload)}
                : {...state, isLoading: false, isError: false}

        case NoteActions.POST_NOTE_FAILED:
            return {...state, isLoading: false, isError: true};

        default:
            return state;
    }
}

export default mainReducer;
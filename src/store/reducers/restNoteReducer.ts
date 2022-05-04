import {INotebookState} from "../types";
import {IRestNoteAction, RestNoteActions} from "../actions/IRestNoteAction";

const restNoteReducer = (state: INotebookState, action: IRestNoteAction): INotebookState => {
    switch (action.type) {
        case RestNoteActions.GET_NOTES_REQUESTED:
            return {...state, isLoading: true};

        case RestNoteActions.GET_NOTES_DONE:
            return (action.payload) ?
                {...state, isLoading: false, isError: false, notes: action.payload}
                : {...state, isLoading: false, isError: false};

        case RestNoteActions.GET_NOTES_FAILED:
            return {...state, isLoading: false, isError: true};

        case RestNoteActions.POST_NOTES_SENT:
            return {...state, isLoading: true};

        case RestNoteActions.POST_NOTES_DONE:
            return (action.payload) ?
                {...state, isLoading: false, isError: false, notes: state.notes.concat(action.payload)}
                : {...state, isLoading: false, isError: false}

        case RestNoteActions.POST_NOTES_FAILED:
            return {...state, isLoading: false, isError: true};

        default:
            return state;
    }
}

export default restNoteReducer;
import {INotebookState} from "../../types";
import {INoteAction, NoteActions} from "../actions/INoteAction";
import {removeItem} from "../../service/service";
import {initialState} from "../initialState";

const noteReducer = (state: INotebookState = initialState, action: INoteAction): INotebookState => {
    switch (action.type) {
        case NoteActions.ADD_NOTE:
            return (action.payload) ? {...state, notes: [...state.notes, action.payload]} : state;
        case NoteActions.REMOVE_NOTE:
            return (action.payload) ? {...state, notes: removeItem(state.notes, action.payload)} : state;
        case NoteActions.CLEAN_NOTES:
            return initialState;
        default:
            return state;
    }
}

export default noteReducer;
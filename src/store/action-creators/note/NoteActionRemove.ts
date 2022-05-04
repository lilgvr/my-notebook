import {INoteAction, NoteActions} from "../../actions/INoteAction";
import {INote} from "../../types";

export function NoteActionRemove(payload: INote | undefined): INoteAction {
    return {
        type: NoteActions.REMOVE_NOTE,
        payload: payload
    }
}
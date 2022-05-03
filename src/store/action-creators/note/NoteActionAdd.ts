import {INoteAction, NoteActions} from "../../actions/INoteAction";
import {INote} from "../../../types";

export function NoteActionAdd(payload: INote): INoteAction {
    return {
        type: NoteActions.ADD_NOTE,
        payload: payload
    }
}
import {INoteAction, NoteActions} from "../../actions/INoteAction";

export function NoteActionClean(): INoteAction {
    return {
        type: NoteActions.CLEAN_NOTES
    }
}
import {INote} from "../../types";
import {INoteAction, NoteActions} from "../../actions/INoteAction";

export function GetRequested(): INoteAction {
    return {
        type: NoteActions.GET_NOTE_REQUESTED,
    }
}

export function GetDone(payload: INote[]): INoteAction {
    return {
        type: NoteActions.GET_NOTE_DONE,
        payload: payload
    }
}

export function GetFailed(): INoteAction {
    return {
        type: NoteActions.GET_NOTE_FAILED
    }
}

export function PostSent(): INoteAction {
    return {
        type: NoteActions.POST_NOTE_SENT
    }
}

export function PostDone(payload: INote[]): INoteAction {
    return {
        type: NoteActions.POST_NOTE_DONE,
        payload: payload
    }
}

export function PostFailed(): INoteAction {
    return {
        type: NoteActions.POST_NOTE_FAILED
    }
}
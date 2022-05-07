import {INote} from "../types";
import {Action} from "redux";

export interface INoteAction extends Action {
    type: NoteActions,
    payload?: INote[]
}

export enum NoteActions {
    GET_NOTE_REQUESTED = "note/GetRequested",
    GET_NOTE_DONE = "note/GetDone",
    GET_NOTE_FAILED = "note/GetFailed",
    POST_NOTE_SENT = "note/PostSent",
    POST_NOTE_DONE = "note/PostDone",
    POST_NOTE_FAILED = "note/PostFailed",
}
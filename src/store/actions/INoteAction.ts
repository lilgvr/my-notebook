import {INote} from "../types";
import {Action} from "redux";

export interface INoteAction extends Action {
    type: NoteActions,
    payload?: INote
}

export enum NoteActions {
    ADD_NOTE = "note/add",
    REMOVE_NOTE = "note/remove",
    CLEAN_NOTES = "note/clean",
    RESET_NOTES = "note/reset"
}
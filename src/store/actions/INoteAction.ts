import {INote} from "../types";
import {Action} from "redux";

export interface INoteAction extends Action {
    type: NoteActions,
    payload?: INote
}

export enum NoteActions {
    ADD_NOTE = "ADD_NOTE",
    REMOVE_NOTE = "REMOVE_NOTE",
    CLEAN_NOTES = "CLEAN_NOTES",
    CLEAR_NOTES = "CLEAR_NOTES"
}
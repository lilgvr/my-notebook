import {INote} from "../types";
import {Action} from "redux";

export interface IRestNoteAction extends Action {
    type: RestNoteActions,
    payload?: INote[]
}

export enum RestNoteActions {
    GET_NOTES_REQUESTED = "GET_NOTES_REQUESTED",
    GET_NOTES_DONE = "GET_NOTES_DONE",
    GET_NOTES_FAILED = "GET_NOTES_FAILED",
    POST_NOTES_SENT = "POST_NOTES_SENT",
    POST_NOTES_DONE = "POST_NOTES_DONE",
    POST_NOTES_FAILED = "POST_NOTES_FAILED",
}
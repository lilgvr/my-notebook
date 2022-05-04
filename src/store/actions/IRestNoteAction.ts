import {INote} from "../types";

export interface IRestNoteAction {
    type: RestNoteActions,
    payload?: Array<INote>
}

export enum RestNoteActions {
    GET_NOTES_REQUESTED = "GET_NOTES_REQUESTED",
    GET_NOTES_DONE = "GET_NOTES_DONE",
    GET_NOTES_FAILED = "GET_NOTES_FAILED",
    POST_NOTES_SENT = "POST_NOTES_SENT",
    POST_NOTES_DONE = "POST_NOTES_DONE",
    POST_NOTES_FAILED = "POST_NOTES_FAILED",
}
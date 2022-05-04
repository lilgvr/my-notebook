import {INote} from "../../types";
import {IRestNoteAction, RestNoteActions} from "../../actions/IRestNoteAction";

export function GetRequested(): IRestNoteAction {
    return {
        type: RestNoteActions.GET_NOTES_REQUESTED,
    }
}

export function GetDone(payload: INote[]): IRestNoteAction {
    return {
        type: RestNoteActions.GET_NOTES_DONE,
        payload: payload
    }
}

export function GetFailed(): IRestNoteAction {
    return {
        type: RestNoteActions.GET_NOTES_FAILED
    }
}

export function PostSent(): IRestNoteAction {
    return {
        type: RestNoteActions.POST_NOTES_SENT
    }
}

export function PostDone(payload: INote[]): IRestNoteAction {
    return {
        type: RestNoteActions.POST_NOTES_DONE,
        payload: payload
    }
}

export function PostError(): IRestNoteAction {
    return {
        type: RestNoteActions.POST_NOTES_FAILED
    }
}
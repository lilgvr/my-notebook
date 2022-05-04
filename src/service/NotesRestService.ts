import {Dispatch} from "redux";
import {IRestNoteAction} from "../store/actions/IRestNoteAction";
import {
    GetDone,
    GetFailed,
    GetRequested,
    PostDone,
    PostSent,
    PostFailed
} from "../store/action-creators/note/NoteRestActions";
import {serverUrl} from "../store/configureStore";
import {INote} from "../store/types";

export const NoteGetRequest = (dispatch: Dispatch<IRestNoteAction>): void => {
    dispatch(GetRequested());
    const url = serverUrl + '/note'

    fetch(url).then(response => response.json())
        .then(data => dispatch(GetDone(data)))
        .catch(() => dispatch(GetFailed()));
}

export const NotePostRequest = (dispatch: Dispatch<IRestNoteAction>, payload: INote[]): void => {
    dispatch(PostSent());
    const url = serverUrl + '/note/add';

    fetch(url).then(response => response.json())
        .then(() => dispatch(PostDone(payload)))
        .catch(() => dispatch(PostFailed()));
}
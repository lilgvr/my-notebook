import {Dispatch} from "redux";
import {IRestNoteAction} from "../store/actions/IRestNoteAction";
import {
    GetDone,
    GetFailed,
    GetRequested,
    PostDone,
    PostFailed,
    PostSent
} from "../store/action-creators/note/NoteRestActions";
import {serverUrl} from "../store/configureStore";
import {INote} from "../store/types";

export const NoteGetRequest = (subDir: string, dispatch: Dispatch<IRestNoteAction>): void => {
    dispatch(GetRequested());
    const url = serverUrl + subDir;

    fetch(url).then(response => response.json())
        .then(data => dispatch(GetDone(data)))
        .catch(() => dispatch(GetFailed()));
}

export const NotePostRequest = (subDir: string, dispatch: Dispatch<IRestNoteAction>, payload: INote[]): void => {
    dispatch(PostSent());
    const url = serverUrl + subDir;
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: new Headers(headers)
    }

    fetch(url, options).then(response => response.json())
        .then(() => dispatch(PostDone(payload)))
        .catch(() => dispatch(PostFailed()));
}
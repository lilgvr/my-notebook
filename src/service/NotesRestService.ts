import {Dispatch} from "redux";
import {INoteAction} from "../store/actions/INoteAction";
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

export const NoteGetRequest = async (subDir: string, dispatch: Dispatch<INoteAction>) => {
    dispatch(GetRequested());
    const url = serverUrl + subDir;

    await fetch(url).then(response => response.json())
        .then(data => dispatch(GetDone(data)))
        .catch(() => dispatch(GetFailed()));
}

export const NotePostRequest = async (subDir: string, dispatch: Dispatch<INoteAction>, payload: INote[]) => {
    dispatch(PostSent());
    const url = serverUrl + subDir;
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: new Headers(headers)
    }

    await fetch(url, options).then(response => response.json())
        .then(() => dispatch(PostDone(payload)))
        .catch(() => dispatch(PostFailed()));
}
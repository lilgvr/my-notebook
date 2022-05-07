import {Dispatch} from "redux";
import {ICategoryAction} from "../store/actions/ICategoryAction";
import {
    GetDone,
    GetFailed,
    GetRequested,
    PostDone,
    PostFailed,
    PostSent
} from "../store/action-creators/category/CategoryRestActions";
import {serverUrl} from "../store/configureStore";
import {ICategory} from "../store/types";

export const CategoryGetRequest = async (subDir: string, dispatch: Dispatch<ICategoryAction>) => {
    dispatch(GetRequested());
    const url = serverUrl + subDir;

    await fetch(url).then(response => response.json())
        .then(data => dispatch(GetDone(data)))
        .catch(() => dispatch(GetFailed()));
}

export const CategoryPostRequest = async (subDir: string, dispatch: Dispatch<ICategoryAction>, payload: ICategory[]) => {
    dispatch(PostSent());
    const url = serverUrl + subDir;
    const headers = {
        mode: 'no-cors',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    const options = {
        method: 'POST',
        headers: new Headers(headers),
        body: JSON.stringify(payload)
    }

    await fetch(url, options).then(response => response.json())
        .then(() => dispatch(PostDone(payload)))
        .catch(() => dispatch(PostFailed()));
}
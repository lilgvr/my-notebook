import {Dispatch} from "redux";
import {IRestCategoryAction} from "../store/actions/IRestCategoryAction";
import {
    GetDone,
    GetFailed,
    GetRequested,
    PostDone, PostFailed,
    PostSent
} from "../store/action-creators/category/CategoryRestActions";
import {serverUrl} from "../store/configureStore";

export const CategoryGetRequest = (subDir: string, dispatch: Dispatch<IRestCategoryAction>) => {
    dispatch(GetRequested());
    const url = serverUrl + subDir;

    fetch(url).then(response => response.json())
        .then(data => dispatch(GetDone(data)))
        .catch(() => dispatch(GetFailed()));
}

export const CategoryPostRequest = (subDir: string, dispatch: Dispatch<IRestCategoryAction>, payload: string[]) => {
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
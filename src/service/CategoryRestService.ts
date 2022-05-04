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

export const CategoryGetRequest = (dispatch: Dispatch<IRestCategoryAction>): void => {
    dispatch(GetRequested());
    const url = serverUrl + '/category';

    fetch(url).then(response => response.json())
        .then(data => dispatch(GetDone(data)))
        .catch(() => dispatch(GetFailed()));
}

export const CategoryPostRequest = (dispatch: Dispatch<IRestCategoryAction>, payload: string[]) => {
    dispatch(PostSent());
    const url = serverUrl + '/category/add';

    fetch(url).then(response => response.json())
        .then(() => dispatch(PostDone(payload)))
        .catch(() => dispatch(PostFailed()));
}
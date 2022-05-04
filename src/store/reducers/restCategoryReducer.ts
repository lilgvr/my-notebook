import {INotebookState} from "../types";
import {IRestCategoryAction, RestCategoryActions} from "../actions/IRestCategoryAction";
import {initialState} from "../initialState";

const restCategoryReducer = (state: INotebookState = initialState, action: IRestCategoryAction): INotebookState => {
    switch (action.type) {
        case RestCategoryActions.GET_CATEGORIES_REQUESTED:
            return {...state, isLoading: true};

        case RestCategoryActions.GET_CATEGORIES_DONE:
            return {...state, isLoading: false, categories: action.payload};

        case RestCategoryActions.GET_CATEGORIES_FAILED:
            return {...state, isLoading: false, isError: true};

        case RestCategoryActions.POST_CATEGORIES_SENT:
            return {...state, isLoading: true};

        case RestCategoryActions.POST_CATEGORIES_DONE:
            return {...state, isLoading: false, isError: false, categories: state.categories.concat(action.payload)};

        case RestCategoryActions.POST_CATEGORIES_FAILED:
            return {...state, isLoading: false, isError: true};

        default:
            return state;
    }
}

export default restCategoryReducer;
import {INoteAction} from "./actions/INoteAction";
import {ICategoryAction} from "./actions/ICategoryAction";

export interface INote {
    id: number,
    categoryId: number,
    date: Date,
    description: string
}

export interface ICategory {
    id: number,
    title: string
}

export interface INotebookState {
    categories: ICategory[],
    notes: INote[]
}

export type NotebookAction = INoteAction | ICategoryAction;
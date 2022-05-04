export interface INote {
    id: number,
    categoryId: number,
    date: Date,
    description: string
}

export interface INotebookState {
    categories: string[],
    notes: INote[],
    isLoading: boolean,
    isError: boolean
}
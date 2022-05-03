import {INotebookState} from "../types";

const testNotes = [
    {id: 0, categoryId: 0, date: new Date(2022, 2, 11), description: "Вечером"},
    {id: 1, categoryId: 0, date: new Date(2022, 2, 10), description: "Утром"},
    {id: 2, categoryId: 0, date: new Date(), description: "Утром"},
    {id: 3, categoryId: 0, date: new Date(), description: "Утром"},
    {id: 4, categoryId: 0, date: new Date(), description: "Утром"},
    {id: 5, categoryId: 0, date: new Date(), description: "Утром"},
    {id: 6, categoryId: 0, date: new Date(), description: "Утром"},
    {id: 7, categoryId: 0, date: new Date(), description: "Утром"},
    {id: 8, categoryId: 0, date: new Date(), description: "Утром"},
    {id: 9, categoryId: 2, date: new Date(), description: "Утром"},
    {id: 10, categoryId: 2, date: new Date(), description: "Утром"},
    {id: 11, categoryId: 2, date: new Date(), description: "Утром"},
    {id: 12, categoryId: 1, date: new Date(), description: "Утром"},
    {id: 13, categoryId: 1, date: new Date(), description: "Утром"},
    {id: 14, categoryId: 1, date: new Date(), description: "Утром"},
    {id: 15, categoryId: 1, date: new Date(), description: "Утром"},
    {id: 16, categoryId: 1, date: new Date(), description: "Утром"},
    {id: 17, categoryId: 1, date: new Date(), description: "Утром"},
    {id: 18, categoryId: 1, date: new Date(), description: "Утром"},
    {id: 19, categoryId: 1, date: new Date(), description: "Утром"},
    {id: 20, categoryId: 1, date: new Date(), description: "Утром"},
]

const testCats = [
    "Спортзал", "Универ", "Стирка"
]

export const initialState: INotebookState = {
    categories: [],
    notes: []
};

import {Dispatch} from "redux";
import {INoteAction} from "../store/actions/INoteAction";
import {INote} from "../store/types";

export function removeItem<T>(arr: T[], value: T) {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

export function formatDate(date: Date) {
    const dt = new Date(date);
    const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    const month = dt.getMonth() + 1;

    return `${dt.getDate()}.${(month < 10) ? `0${month}` : month}, ${days[dt.getDay()]}`;
}
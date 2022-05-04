import {CategoryActionClearNotes} from "../../store/action-creators/category/CategoryActionClearNotes";
import {CategoryActionRemove} from "../../store/action-creators/category/CategoryActionRemove";
import {NoteActionAdd} from "../../store/action-creators/note/NoteActionAdd";
import useTypedSelector from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import React from "react";
import "./category.css";
import {CategoryPostRequest} from "../../service/CategoryRestService";

const Button: React.FC<{ id: number }> = ({id}) => {
    const dispatch = useDispatch();
    const {notes} = useTypedSelector(state => state.note);
    const count = notes.length;

    const handleClick = () => {
        let desc = prompt("Введите описание заметки") || "";
        if (desc) desc = desc.trim();
        const note = {id: count, categoryId: id, date: new Date(), description: desc};
        const action = NoteActionAdd(note);
        dispatch(action);
    }

    return (
        <div className="category-btn" onClick={handleClick}>
            <span>+</span>
        </div>
    );
}

const Category: React.FC<{ title: string, id: number }> = ({title, id}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(CategoryActionClearNotes(title));
        dispatch(CategoryActionRemove(title));
    }

    return (
        <div className="category">
            <Button id={id}/>
            <p title="Удалить" onClick={handleClick}>{title}</p>
        </div>
    );
}

export default Category;
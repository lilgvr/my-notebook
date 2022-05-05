import useTypedSelector from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import React from "react";
import "./category.css";
import {NotePostRequest} from "../../service/NotesRestService";
import {CategoryPostRequest} from "../../service/CategoryRestService";

const Button: React.FC<{ id: number }> = ({id}) => {
    const dispatch = useDispatch();
    const {notes} = useTypedSelector(state => state.noteRest);
    const count = notes.length;

    const handleClick = () => {
        let desc = prompt("Введите описание заметки") || "";
        if (desc) desc = desc.trim();
        const note = {id: count, categoryId: id, date: new Date(), description: desc};
        NotePostRequest('/note/add', dispatch, [note]);
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
        CategoryPostRequest('/category/delete', dispatch, [`${id}`])
    }

    return (
        <div className="category">
            <Button id={id}/>
            <p title="Удалить" onClick={handleClick}>{title}</p>
        </div>
    );
}

export default Category;
import {CategoryActionClearNotes} from "../../store/action-creators/category/CategoryActionClearNotes";
import {CategoryActionRemove} from "../../store/action-creators/category/CategoryActionRemove";
import {NoteActionAdd} from "../../store/action-creators/note/NoteActionAdd";
import useTypedSelector from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import React from "react";
import "./category.css";
import add from "../../assets/svg/add.svg";

const Button: React.FC<{ id: number }> = ({id}) => {
    const dispatch = useDispatch();
    const {notes} = useTypedSelector(state => state.main);
    const count = notes.length;

    const handleClick = () => {
        let desc = prompt("Enter note description");
        if (desc !== null) desc = desc.trim();
        else return;

        const note = {id: count, categoryId: id, date: new Date(), description: desc};
        const action = NoteActionAdd(note);
        dispatch(action);
    }

    return (
        <div className="category-btn" onClick={handleClick}>
            <img src={add} alt="Add"/>
        </div>
    );
}

const Category: React.FC<{ title: string, id: number }> = ({title, id}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        const payload = {id, title};
        dispatch(CategoryActionClearNotes(payload));
        dispatch(CategoryActionRemove(payload));
    }

    return (
        <div className="category">
            <Button id={id}/>
            <p title="Remove" onClick={handleClick}>{title}</p>
        </div>
    );
}

export default Category;
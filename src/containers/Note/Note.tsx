import useTypedSelector from "../../hooks/useTypedSelector";
import {formatDate} from "../../service/service";
import {useDispatch} from "react-redux";
import React, {FC} from "react";
import "./note.css";
import {NotePostRequest} from "../../service/NotesRestService";

const Note: FC<{ id: number, date: Date, description: string }> = ({id, date, description}) => {
    const dispatch = useDispatch();
    const {notes} = useTypedSelector(state => state.main);

    let current = notes.find(x => x.id === id);

    const handleClick = () => {
        // @ts-ignore
        NotePostRequest('/note/delete', dispatch, [current], current.id);
    }

    return (
        <div className="note" title="Удалить" onClick={handleClick}>
            <p className="note_date">{formatDate(date)}</p>
            <p className="note_description">{description}</p>
        </div>
    );
}

export default Note;
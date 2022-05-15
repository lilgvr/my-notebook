import {NoteActionRemove} from "../../store/action-creators/note/NoteActionRemove";
import useTypedSelector from "../../hooks/useTypedSelector";
import {formatDate} from "../../service/service";
import {useDispatch} from "react-redux";
import React, {FC} from "react";
import "./note.css";
import strings from "../../assets/strings";

const Note: FC<{ id: number, date: Date, description: string }> = ({id, date, description}) => {
    const dispatch = useDispatch();
    const {notes} = useTypedSelector(state => state.main);
    const {removeBtn} = strings;

    let current = notes.find(x => x.id === id);

    const handleClick = () => {
        dispatch(NoteActionRemove(current));
    }

    return (
        <div className="note" title={removeBtn} onClick={handleClick}>
            <p className="note_date">{formatDate(date)}</p>
            <p className="note_description">{description}</p>
        </div>
    );
}

export default Note;
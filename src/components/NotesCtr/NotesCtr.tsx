import useTypedSelector from "../../hooks/useTypedSelector";
import Note from "../../containers/Note/Note";
import {INote} from "../../store/types";
import React from "react";
import "./notes-ctr.css";

const NotesCtr: React.FC<{ id: number }> = ({id}) => {
    const sortFunc = (a: INote, b: INote) => {
        const ad = new Date(a.date), bd = new Date(b.date);
        return bd.getTime() - ad.getTime();
    };
    const filterFunc = (n: INote) => n.categoryId === id;

    const {notes} = useTypedSelector(state => state.main);
    const preparedNotes = notes.filter(filterFunc).sort(sortFunc);

    return (
        <div className="notes-ctr">
            {preparedNotes.map(
                (el, i) => <Note id={el.id} date={el.date} description={el.description} key={i}/>
            )}
        </div>
    );
}

export default NotesCtr;
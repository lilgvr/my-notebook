import useTypedSelector from "../../hooks/useTypedSelector";
import Note from "../../containers/Note/Note";
import {INote} from "../../store/types";
import React, {useCallback, useMemo} from "react";
import "./notes-ctr.css";

const NotesCtr: React.FC<{ id: number }> = ({id}) => {
    const {notes} = useTypedSelector(state => state.main);

    const sortFunc = (a: INote, b: INote) => {
        const ad = new Date(a.date), bd = new Date(b.date);
        return bd.getTime() - ad.getTime();
    };
    const filterFunc = useCallback((n: INote) => n.categoryId === id, [id]);

    const memoFunc = useCallback(() => [...notes].filter(filterFunc).sort(sortFunc), [filterFunc, notes]);

    const preparedNotes = useMemo(memoFunc, [memoFunc]);

    return (
        <div className="notes-ctr">
            {preparedNotes.map(
                (el, i) => <Note id={el.id} date={el.date} description={el.description} key={i}/>
            )}
        </div>
    );
}

export default NotesCtr;
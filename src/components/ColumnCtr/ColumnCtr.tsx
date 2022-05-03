import CategoryCtr from "../CategoriesCtr/CategoryCtr";
import NotesCtr from "../NotesCtr/NotesCtr";
import React from "react";
import "./column-ctr.css";

const ColumnCtr: React.FC<{ id: number }> = ({id}) => {
    return (
        <div className="column-ctr">
            <CategoryCtr id={id}/>
            <NotesCtr id={id}/>
        </div>
    );
}

export default ColumnCtr;
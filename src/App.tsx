import ColumnCtr from "./components/ColumnCtr/ColumnCtr";
import useTypedSelector from "./hooks/useTypedSelector";
import React, {Fragment, useEffect} from 'react';
import Header from "./components/Header/Header";
import {NoteGetRequest} from "./service/NotesRestService";
import {useDispatch} from "react-redux";
import {CategoryGetRequest} from "./service/CategoryRestService";
import {ICategory} from "./store/types";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        NoteGetRequest('/note', dispatch);
        CategoryGetRequest('category', dispatch);
    }, []);

    const {categories} = useTypedSelector(state => state.main);

    return (
        <Fragment>
            <Header/>
            <div className="container">
                {categories.map((el: ICategory, i: number) => {
                    return <ColumnCtr id={i} key={i}/>
                })}
            </div>
        </Fragment>
    );
}

export default App;

import ColumnCtr from "./components/ColumnCtr/ColumnCtr";
import useTypedSelector from "./hooks/useTypedSelector";
import React, {Fragment, useEffect} from 'react';
import Header from "./components/Header/Header";
import {GetRequest} from "./service/NotesRestService";
import {useDispatch} from "react-redux";

function App() {
    const {categories} = useTypedSelector(state => state.category);
    const dispatch = useDispatch();
    useEffect(()=>{
        GetRequest(dispatch);

    }, [])

    return (
        <Fragment>
            <Header/>
            <div className="container">
                {categories.map((el: string, i: number) => {
                    return <ColumnCtr id={i} key={i}/>
                })}
            </div>
        </Fragment>
    );
}

export default App;

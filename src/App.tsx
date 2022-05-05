import ColumnCtr from "./components/ColumnCtr/ColumnCtr";
import useTypedSelector from "./hooks/useTypedSelector";
import React, {Fragment} from 'react';
import Header from "./components/Header/Header";

function App() {
    const {categories} = useTypedSelector(state => state.main);

    return (
        <Fragment>
            <Header/>
            <div className="container">
                {categories.map((el, i) => {
                    return <ColumnCtr id={i} key={i}/>
                })}
            </div>
        </Fragment>
    );
}

export default App;

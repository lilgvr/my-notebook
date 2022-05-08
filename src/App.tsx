import ColumnCtr from "./components/ColumnCtr/ColumnCtr";
import useTypedSelector from "./hooks/useTypedSelector";
import React, {Fragment} from 'react';
import Header from "./components/Header/Header";
import EmptyCtr from "./components/EmptyCtr/EmptyCtr";

function App() {
    const {categories} = useTypedSelector(state => state.main);

    return (
        <Fragment>
            <Header/>
            {categories.length === 0 ?
                <EmptyCtr/>
                :
                <div className="container">
                    {categories.map((_el, i) => <ColumnCtr id={i} key={i}/>)}
                </div>
            }
        </Fragment>
    );
}

export default App;

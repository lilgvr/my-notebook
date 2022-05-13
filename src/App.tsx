import ColumnCtr from "./components/ColumnCtr/ColumnCtr";
import useTypedSelector from "./hooks/useTypedSelector";
import React, {Fragment, useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import EmptyCtr from "./components/EmptyCtr/EmptyCtr";

function App() {
    const {categories} = useTypedSelector(state => state.main);
    const [ctrWidth, setCtrWidth] = useState("50%");

    const changeWidth = (count: number) => {
        if (count > 10) setCtrWidth("100%");
        else setCtrWidth(`${50 + count * 5}%`)
    }

    useEffect(() => {
        changeWidth(categories.length);
    }, [categories.length])

    return (
        <Fragment>
            <Header/>
            {categories.length === 0 ?
                <EmptyCtr/>
                :
                <div className="container" style={{width: ctrWidth}}>
                    {categories.map((el, i) => <ColumnCtr id={el.id} key={el.id}/>)}
                </div>
            }
        </Fragment>
    );
}

export default App;

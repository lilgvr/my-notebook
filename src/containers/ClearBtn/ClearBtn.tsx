import {CategoryActionClean} from "../../store/action-creators/category/CategoryActionClean";
import {persistor} from "../../store/configureStore";
import {useDispatch} from "react-redux";
import {FC} from "react";
import "./clear-btn.css";
import {NoteActionClean} from "../../store/action-creators/note/NoteActionClean";

const ClearBtn: FC = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(CategoryActionClean());
        dispatch(NoteActionClean());
        persistor.flush();
    }

    return (
        <div className="header-btn-ctr" onClick={handleClick}>
            <div className="header-btn">
                <span>-</span>
            </div>
            <p>Очистить</p>
        </div>
    );
}

export default ClearBtn;
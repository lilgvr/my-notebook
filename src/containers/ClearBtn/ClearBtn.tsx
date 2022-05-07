import {CategoryActionClean} from "../../store/action-creators/category/CategoryActionClean";
import {persistor} from "../../store/configureStore";
import {useDispatch} from "react-redux";
import {FC} from "react";
import "./clear-btn.css";
import {NoteActionClean} from "../../store/action-creators/note/NoteActionClean";
import clean from "../../assets/svg/clean.svg";

const ClearBtn: FC = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(CategoryActionClean());
        dispatch(NoteActionClean());
        persistor.flush();
    }

    return (
        <div className="header-btn-ctr" onClick={handleClick}>
            <div className="header-btn clear-btn">
                <img src={clean} alt="Очистить"/>
            </div>
            <p>Очистить</p>
        </div>
    );
}

export default ClearBtn;
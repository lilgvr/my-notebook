import {CategoryActionClean} from "../../store/action-creators/category/CategoryActionClean";
import {persist} from "../../store/configureStore";
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
        persist.flush();
    }

    return (
        <div className="header-btn-ctr" onClick={handleClick}>
            <div className="header-btn clear-btn">
                <img src={clean} alt="Clear"/>
            </div>
            <p>Clear</p>
        </div>
    );
}

export default ClearBtn;
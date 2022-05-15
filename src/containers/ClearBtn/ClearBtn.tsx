import {CategoryActionClean} from "../../store/action-creators/category/CategoryActionClean";
import {persist} from "../../store/configureStore";
import {useDispatch} from "react-redux";
import {FC} from "react";
import "./clear-btn.css";
import {NoteActionClean} from "../../store/action-creators/note/NoteActionClean";
import clean from "../../assets/svg/clean.svg";
import strings from "../../assets/strings";

const ClearBtn: FC = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(CategoryActionClean());
        dispatch(NoteActionClean());
        persist.flush();
    }
    const {clearBtn} = strings;

    return (
        <div className="header-btn-ctr" onClick={handleClick}>
            <div className="header-btn clear-btn">
                <img src={clean} alt={clearBtn}/>
            </div>
            <p>{clearBtn}</p>
        </div>
    );
}

export default ClearBtn;
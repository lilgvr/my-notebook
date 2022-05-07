import {persistor} from "../../store/configureStore";
import {useDispatch} from "react-redux";
import {FC} from "react";
import "./clear-btn.css";
import {CategoryPostRequest} from "../../service/CategoryRestService";

const ClearBtn: FC = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        CategoryPostRequest('/deleteAll', dispatch, []);
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
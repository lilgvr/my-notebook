import "./header-btn.css";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {CategoryPostRequest} from "../../service/CategoryRestService";

const HeaderBtn: FC = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        let title = prompt("Введите название категории") || "";
        if (title) title = title.trim();
        CategoryPostRequest('/category/add', dispatch, [title]);
    }

    return (
        <div className="header-btn-ctr">
            <div className="header-btn" onClick={handleClick}>
                <span>+</span>
            </div>
            <p>Добавить категорию</p>
        </div>
    );
}

export default HeaderBtn;
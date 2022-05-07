import "./header-btn.css";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {CategoryPostRequest} from "../../service/CategoryRestService";
import useTypedSelector from "../../hooks/useTypedSelector";

const HeaderBtn: FC = () => {
    const dispatch = useDispatch();
    const {categories} = useTypedSelector(state => state.main);
    const handleClick = () => {
        let title = prompt("Введите название категории") || "";
        console.log(title)
        if (title) title = title.trim();
        CategoryPostRequest('/category/add', dispatch, [{id: categories.length, title: title}]);
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
import "./header-btn.css";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {CategoryActionAdd} from "../../store/action-creators/category/CategoryActionAdd";
import useTypedSelector from "../../hooks/useTypedSelector";

const HeaderBtn: FC = () => {
    const {categories} = useTypedSelector(state => state.category);
    const dispatch = useDispatch();
    const handleClick = () => {
        let title = prompt("Введите название категории") || "";
        if (title) title = title.trim();
        const action = CategoryActionAdd(title)
        dispatch(action);
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
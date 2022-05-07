import "./header-btn.css";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {CategoryActionAdd} from "../../store/action-creators/category/CategoryActionAdd";
import useTypedSelector from "../../hooks/useTypedSelector";

const HeaderBtn: FC = () => {
    const dispatch = useDispatch();
    const {categories} = useTypedSelector(state => state.main);
    const handleClick = () => {
        let title = prompt("Введите название категории");
        if (title !== null) title = title.trim();
        else return;

        const payload = {id: categories.length, title: title};
        const action = CategoryActionAdd(payload);
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
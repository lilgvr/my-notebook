import "./header-btn.css";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {CategoryActionAdd} from "../../store/action-creators/category/CategoryActionAdd";
import useTypedSelector from "../../hooks/useTypedSelector";
import add from "../../assets/svg/add.svg";
import strings from "../../assets/strings";

const HeaderBtn: FC = () => {
    const dispatch = useDispatch();
    const {categories} = useTypedSelector(state => state.main);
    const {addCategoryPrompt, addBtn, addCategory} = strings;
    const handleClick = () => {
        let title = prompt(addCategoryPrompt);
        if (title !== null) title = title.trim();
        else return;

        const payload = {id: categories.length, title: title};
        const action = CategoryActionAdd(payload);
        dispatch(action);
    }

    return (
        <div className="header-btn-ctr">
            <div className="header-btn" onClick={handleClick}>
                <img src={add} alt={addBtn}/>
            </div>
            <p>{addCategory}</p>
        </div>
    );
}

export default HeaderBtn;
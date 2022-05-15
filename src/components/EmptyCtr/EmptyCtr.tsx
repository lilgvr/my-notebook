import {FC} from "react";
import "./empty-ctr.css";
import strings from "../../assets/strings";

const EmptyCtr: FC = () => {
    const {emptyList} = strings;

    return (
        <div className="empty-ctr">
            <p>{emptyList}</p>
        </div>
    );
}

export default EmptyCtr;
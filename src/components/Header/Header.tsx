import HeaderBtn from "../../containers/HeaderBtn/HeaderBtn";
import {FC} from "react";
import "./header.css";
import ClearBtn from "../../containers/ClearBtn/ClearBtn";

const Header: FC = () => {
    return (
        <header className="header">
            <ClearBtn/>
            <HeaderBtn/>
        </header>
    );
}

export default Header;
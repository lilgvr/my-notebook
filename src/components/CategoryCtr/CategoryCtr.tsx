import Category from "../../containers/Category/Category";
import useTypedSelector from "../../hooks/useTypedSelector";
import "./category-ctr.css";
import React from "react";

const CategoryCtr: React.FC<{ id: number }> = ({id}) => {
    const {categories} = useTypedSelector(state => state.main);

    return (
        <div className="category-ctr">
            <Category title={categories[id].title} id={id}/>
        </div>
    );
}

export default CategoryCtr;
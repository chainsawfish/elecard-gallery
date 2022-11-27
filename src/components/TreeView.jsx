import React, {useMemo, useState} from "react";
import {sorting} from "../utils/sorting";
import TreeCategoryView from "./TreeCategoryView";
import constants from "../data/constants";


const TreeView = ({images}) => {
    const [sign, setSign] = useState(false);

    const sortedImages = useMemo(() => [...images].sort(sorting.category), [images])
    const categoriesArray = useMemo(() => Array(...new Set(images.map((el) => el.category))).map((cat, ind) => {
        return (
            <TreeCategoryView category={cat} images={sortedImages} key={ind} />
        )
        // eslint-disable-next-line
    }), []);

    return (
        <div className="treeView" onClick={() => {
            setSign(!sign)
        }}>
            <h1 className="rootView">
                {constants.isOpened(sign)} Root
            </h1>
            <div style={constants.changeDisplayStyle(sign)}>
                {categoriesArray}
            </div>
        </div>
    );
};
export default TreeView;

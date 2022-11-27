import React, {useMemo} from "react";
import {useState} from "react";
import TreeNode from "./TreeNode";
import constants from "../data/constants";

const TreeCategoryView = ({category, images}) => {
    const [sign, setSign] = useState(false);
    const imagesArray = useMemo(() => {
        return (images.map((img, ind) => {
            if (img.category === category) {
                return <TreeNode image={img} key={ind} style={constants.changeDisplayStyle(sign)}/>;
            }
            return null
        }))
        // eslint-disable-next-line
    }, [sign])
    return (
        <div className="category">
            <h2 onClick={(e) => {
                e.stopPropagation()
                setSign(!sign)
            }}>
                {constants.isOpened(sign)} {category}
            </h2>
            <div style={constants.changeDisplayStyle(sign)}>
                {imagesArray}
            </div>
        </div>
    );
};
export default TreeCategoryView;

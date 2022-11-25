import React from "react";
import {useState} from "react";
import TreeImage from "./TreeImage";

const TreeCategoryView = ({category, images}) => {
    const [sign, setSign] = useState(false);
    const isOpened = (value) => {
        return value ? <span>[-]</span> : <span>[+]</span>;
    };
    const changeDisplayStyle = (value) => {
        return value ? {display: "block"} : {display: "none"};
    };
    return (
        <div className="category">
            <h2 onClick={() => setSign(!sign)}>
                {isOpened(sign)} {category}
            </h2>
            <div style={changeDisplayStyle(sign)}>
            {images.map((img, ind) => {
                if (img.category === category) {
                    return <TreeImage image={img}  key={ind}   />;
                }
                return null;
            })}
            </div>
        </div>
    );
};
export default TreeCategoryView;

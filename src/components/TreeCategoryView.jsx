import React from "react";
import {useState} from "react";
import TreeImage from "./TreeImage";

const TreeCategoryView = ({category, images}) => {
    const [sign, setSign] = useState(false);
    const isOpened = (value) => {
        return value ? <span>[-]</span> : <span>[+]</span>;
    };

    return (
        <div className="category">
            <h2 value={sign} onClick={() => setSign(!sign)}>
                {isOpened(sign)} {category}
            </h2>
            {images.map((img, ind) => {
                if (img.category === category) {
                    return <TreeImage image={img} sign={sign} key={ind}/>;
                }
                return null;
            })}
        </div>
    );
};
export default TreeCategoryView;

import React from "react";
import { useState } from "react";
import TreeNode from "./TreeNode";

const CategoryView = ({ category, images }) => {
  const [sign, setSign] = useState(false);
  const isOpened = (value) => {
    return value ? <span>[-]</span> : <span>[+]</span>;
  };
  const setSignHandler = (value) => {
    setSign(!sign);
  };
  return (
    <div className="category">
      <h2 value={sign} onClick={() => setSign(!sign)}>
        {isOpened(sign)} {category}
      </h2>
      {images.map((img, ind) => {
        if (img.category === category) {
          return <TreeNode imageUrl={img.image} sign={sign} key={ind} />;
        }
      })}
    </div>
  );
};
export default CategoryView;

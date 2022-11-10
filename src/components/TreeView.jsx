import TreeNode from "./TreeNode";
import { sorting } from "../module/sorting";
import { useState } from "react";
import CategoryView from "./CategoryView";

const TreeView = ({ images, deleteHandler }) => {
  const categoriesArray = (arrayOfImages) => {
    const arr = Array(...new Set(arrayOfImages.map((el) => el.category)));
    return arr;
  };
  let sortedImages = images.sort(sorting.category);

  return (
    <div className="treeView">
      {categoriesArray(images).map((cat, ind) => {
        return <CategoryView category={cat} images={sortedImages} key={ind} />;
      })}
    </div>
  );
};
export default TreeView;

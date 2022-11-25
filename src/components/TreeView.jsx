import { sorting } from "../module/sorting";
import TreeCategoryView from "./TreeCategoryView";
import React, { useMemo, useState} from "react";

const TreeView = ({ images }) => {
  const [sign, setSign] = useState(false);

  const isOpened = (value) => {
    return value ? <span>[-]</span> : <span>[+]</span>;
  };
  const changeDisplayStyle = (value) => {
    return value ? {display: "block"} : {display: "none"};
  };

  let sortedImages = useMemo(() => [...images].sort(sorting.category),[images])
  const categoriesArray =  useMemo(() => Array(...new Set(images.map((el) => el.category))).map((cat, ind) => {
    return (
        <TreeCategoryView category={cat} images={sortedImages} key={ind}  />
    )

  }),[sortedImages]);

  return (
    <div className="treeView" value={sign} onClick={() => setSign(!sign)}>
      <h1 className="rootView">
        {isOpened(sign)} Root
      </h1>
  <div style={changeDisplayStyle(sign)} >
        {categoriesArray}
  </div>

    </div>
  );
};
export default TreeView;

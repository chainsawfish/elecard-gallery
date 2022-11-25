import { sorting } from "../module/sorting";
import TreeCategoryView from "./TreeCategoryView";

const TreeView = ({ images }) => {
  const categoriesArray = (arrayOfImages) => {
    return  Array(...new Set(arrayOfImages.map((el) => el.category)));

  };
  let sortedImages = images.sort(sorting.category);

  return (
    <div className="treeView">
      {categoriesArray(images).map((cat, ind) => {
        return <TreeCategoryView category={cat} images={sortedImages} key={ind} />;
      })}
    </div>
  );
};
export default TreeView;

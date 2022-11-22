import { useContext } from "react";
import { AppContext } from "../App";
import "./RadioSort.module.css";

const RadioSort = () => {
  const { sortHandler } = useContext(AppContext);
  return (
    <>
      <div>
        <h4>Sort by</h4>
        Name
        <input
          onChange={(e) => sortHandler(e.target.value)}
          type="radio"
          value="name"
          name="sort"
          defaultChecked={true}
        />
        Filesize
        <input
          onChange={(e) => sortHandler(e.target.value)}
          type="radio"
          value="fileSize"
          name="sort"
        />
        Date
        <input
          onChange={(e) => sortHandler(e.target.value)}
          type="radio"
          value="date"
          name="sort"
        />
        Category
        <input
          onChange={(e) => sortHandler(e.target.value)}
          type="radio"
          value="category"
          name="sort"
        />
      </div>
    </>
  );
};

export default RadioSort;

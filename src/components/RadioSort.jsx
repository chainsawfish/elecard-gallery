import { useContext } from "react";
import { AppContext } from "../App";
import "./RadioSort.module.css";
import constants from "../data/constants";

const RadioSort = ({currentrView}) => {
  const { sortHandler } = useContext(AppContext);
  return (
    <>
      <div style={constants.changeDisplayStyle(currentrView)}>
        <h4>Sort by</h4>

        <input
          onChange={(e) => sortHandler(e.target.value)}
          type="radio"
          value="name"
          name="sort"

        />
        Name
        <input
          onChange={(e) => sortHandler(e.target.value)}
          type="radio"
          value="fileSize"
          name="sort"
        />
        Filesize
        <input
          onChange={(e) => sortHandler(e.target.value)}
          type="radio"
          value="date"
          name="sort"
        />
        Date
        <input
          onChange={(e) => sortHandler(e.target.value)}
          type="radio"
          value="category"
          name="sort"
        />
        Category
      </div>
    </>
  );
};

export default RadioSort;

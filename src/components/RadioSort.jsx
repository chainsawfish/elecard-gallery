import style from "./RadioSort.module.css";
import { useState } from "react";

const RadioSort = ({ sortHandler }) => {
  const [radioValue, setRadioValue] = useState("name");

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
    sortHandler(radioValue);
  };
  return (
    <>
      <div>
        <h4>Sort by</h4>
        Name
        <input
          onChange={handleRadioChange}
          checked={radioValue === "name"}
          type="radio"
          value="name"
          name="sort"
        />
        Filesize
        <input
          onChange={handleRadioChange}
          checked={radioValue === "fileSize"}
          type="radio"
          value="fileSize"
          name="sort"
        />
        Date
        <input
          onChange={handleRadioChange}
          checked={radioValue === "date"}
          type="radio"
          value="date"
          name="sort"
        />
        Category
        <input
          onChange={handleRadioChange}
          checked={radioValue === "category"}
          type="radio"
          value="category"
          name="sort"
        />
      </div>
    </>
  );
};

export default RadioSort;

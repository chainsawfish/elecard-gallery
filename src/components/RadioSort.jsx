import "./RadioSort.module.css";

const RadioSort = ({ sortHandler }) => {
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

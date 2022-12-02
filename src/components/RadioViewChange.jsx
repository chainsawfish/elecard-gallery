import { useContext } from "react";
import { AppContext } from "../App";

const RadioViewChange = () => {
  const { viewHandler } = useContext(AppContext);
  return (
    <div>
      <input
        type="radio"
        name="viewChange"
        value="standartView"
        onChange={(e) => viewHandler(e.target.value)}
        defaultChecked
      />
        Standart view
      <input
        type="radio"
        name="viewChange"
        value="treeView"
        onChange={(e) => viewHandler(e.target.value)}
      />
        Tree view
    </div>
  );
};

export default RadioViewChange;

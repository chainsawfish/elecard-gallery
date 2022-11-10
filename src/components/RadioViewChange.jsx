const RadioViewChange = ({ viewHandler }) => {
  return (
    <div>
      Standart view
      <input
        type="radio"
        name="viewChange"
        value="standartView"
        onChange={() => viewHandler("standartView")}
        defaultChecked
      />
      Tree view
      <input
        type="radio"
        name="viewChange"
        value="treeView"
        onChange={() => viewHandler("treeView")}
      />
    </div>
  );
};

export default RadioViewChange;

const RadioViewChange = ({ viewHandler }) => {
  return (
    <div>
      Standart view
      <input
        type="radio"
        name="viewChange"
        value="standartView"
        onChange={(e) => viewHandler(e.target.value)}
        defaultChecked
      />
      Tree view
      <input
        type="radio"
        name="viewChange"
        value="treeView"
        onChange={(e) => viewHandler(e.target.value)}
      />
    </div>
  );
};

export default RadioViewChange;

import "./Header.module.css";
import RadioSort from "./RadioSort";
import RadioViewChange from "./RadioViewChange";

const Header = ({ sortHandler, deleteHandler, viewHandler }) => {
  const clearLocalStorage = () => {
    localStorage.clear();
    deleteHandler();
  };
  return (
    <header>
      <button onClick={clearLocalStorage}>Reset</button>
      <RadioViewChange viewHandler={viewHandler} />
      <RadioSort sortHandler={sortHandler} />
    </header>
  );
};

export default Header;

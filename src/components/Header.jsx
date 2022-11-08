import style from "./Header.module.css";
import RadioSort from "./RadioSort";

const Header = ({ sortHandler, deleteHandler }) => {
  const clearLocalStorage = () => {
    localStorage.clear();
    deleteHandler();
  };
  return (
    <header>
      <button onClick={clearLocalStorage}>Reset</button>
      <RadioSort sortHandler={sortHandler} />
    </header>
  );
};

export default Header;

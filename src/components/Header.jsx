import style from "./Header.module.css";
import RadioSort from "./RadioSort";

const Header = ({ sortHandler }) => {
  const clearLocalStorage = () => {
    localStorage.clear();
  };
  return (
    <header>
      <button onClick={clearLocalStorage}>Reset</button>
      <RadioSort sortHandler={sortHandler} />
    </header>
  );
};

export default Header;

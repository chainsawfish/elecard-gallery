import "./Header.module.css";
import RadioSort from "./RadioSort";
import RadioViewChange from "./RadioViewChange";

const Header = ({resetHandler}) => {
  const clearLocalStorage = () => {
    localStorage.clear();
    resetHandler()
  };
  return (
    <header>
      <button className="btnReset" onClick={() => clearLocalStorage()}>Reset</button>
      <RadioViewChange />
      <RadioSort />
    </header>
  );
};

export default Header;

import "./Header.module.css";
import RadioSort from "./RadioSort";
import RadioViewChange from "./RadioViewChange";
import constants from "../data/constants";

const Header = ({resetHandler, currentView}) => {
  const clearLocalStorage = () => {
    localStorage.clear();
    resetHandler()
  };
  return (
    <header>
      <button style={constants.changeDisplayStyle(currentView)} className="btnReset" onClick={() => clearLocalStorage()}>Reset</button>
      <RadioViewChange />
      <RadioSort currentView={currentView}/>
    </header>
  );
};

export default Header;

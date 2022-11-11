import { useContext } from "react";
import "./Header.module.css";
import RadioSort from "./RadioSort";
import RadioViewChange from "./RadioViewChange";
import { AppContext } from "../App";

const Header = () => {
  const { deleteHandler } = useContext(AppContext);
  const clearLocalStorage = () => {
    localStorage.clear();
    deleteHandler();
  };
  return (
    <header>
      <button onClick={clearLocalStorage}>Reset</button>
      <RadioViewChange />
      <RadioSort />
    </header>
  );
};

export default Header;

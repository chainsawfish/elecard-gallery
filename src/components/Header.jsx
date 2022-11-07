import style from "./Header.module.css";
const Header = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
  };
  return (
    <header>
      <button onClick={clearLocalStorage}>Reset</button>
    </header>
  );
};

export default Header;

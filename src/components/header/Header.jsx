import "./Header.module.css";
import RadioSort from "./header__radio/RadioSort";
import RadioViewChange from "./header__radio/RadioViewChange";
import constants from "../../data/constants";

const Header = ({resetHandler, currentView}) => {
    return (
        <header>
            <button style={constants.changeDisplayStyle(currentView)} className="btnReset"
                    onClick={() => resetHandler()}>Reset
            </button>
            <RadioViewChange/>
            <RadioSort currentView={currentView} />
        </header>
    );
};

export default Header;

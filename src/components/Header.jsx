import "./Header.module.css";
import RadioSort from "./RadioSort";
import RadioViewChange from "./RadioViewChange";
import constants from "../data/constants";

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

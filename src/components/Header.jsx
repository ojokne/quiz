import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Header() {
  const [display, setDisplay] = useState(false);
  const [mobileStyle, setMobileStyle] = useState("hidden");

  const style = { color: "white", fontSize: "1.5em" };
  const direction = {
    row: "flex-row",
    col: "flex-col",
  };

  function toggleMenu() {
    setDisplay(!display);
    if (display) {
      setMobileStyle("lg:hidden");
    } else {
      setMobileStyle("hidden");
    }
  }
  return (
    <div className="bg-sky-800 shadow shadow-slate-500 text-slate-200">
      <div className="max-w-4xl m-auto flex flex-row justify-between items-center ">
        <h1 className="p2.5 m-2.5 text-2xl font-bold">
          <Link to="/">Quiz</Link>
        </h1>
        <div className="mx-2 px-2">
          <span onClick={toggleMenu} className="lg:hidden p2.5 m-2.5">
            <FaBars style={style} />
          </span>
        </div>
        <div className="hidden lg:block">
          <Menu style={direction.row} />
        </div>
      </div>
      <div className={mobileStyle}>
        <Menu style={direction.col} />
      </div>
    </div>
  );
}

export default Header;

import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Header() {
  const style = useMemo(() => {
    return { color: "#cbd5e1", fontSize: "1.5em" };
  }, []);
  const [display, setDisplay] = useState(false);
  const [mobileStyle, setMobileStyle] = useState("hidden");
  const [icon, setIcon] = useState(<FaBars style={style} />);

  const direction = {
    row: "flex-row",
    col: "flex-col",
  };

  useEffect(() => {
    if (display) {
      setMobileStyle("lg:hidden");
      setIcon(<FaTimes style={style} />);
    } else {
      setMobileStyle("hidden");
      setIcon(<FaBars style={style} />);
    }
  }, [display, style]);
  return (
    <div className="shadow bg-slate-900 shadow-slate-700  text-slate-300">
      <div className="max-w-4xl m-auto flex flex-row justify-between items-center ">
        <h1 className="p2.5 m-2.5 text-2xl font-bold">
          <Link to="/">Quiz</Link>
        </h1>
        <div className="mx-2 px-2">
          <span
            onClick={() => {
              setDisplay(!display);
            }}
            className="lg:hidden p2.5 m-2.5"
          >
            {icon}
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

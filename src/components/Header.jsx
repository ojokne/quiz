import { FaBars } from "react-icons/fa";

function Header() {
  const style = { color: "white", fontSize: "1.5em" };
  return (
    <div className="bg-sky-800 shadow shadow-slate-500">
      <div className="max-w-4xl m-auto flex flex-row justify-between items-center">
        <h1 className="text-slate-200 p2.5 m-2.5 text-2xl font-bold">Quiz</h1>
        <span className="lg-hidden p2.5 m-2.5 hover:ring-2 hover:rounded hover:ring-offset-sky-800 hover:ring-offset-4">
          <FaBars style={style} />
        </span>
      </div>
    </div>
  );
}

export default Header;

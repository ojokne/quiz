import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Menu({ style }) {
  const iconStyle = { fontSize: "1.5em" };

  let styles = "flex items-center p-1 m-1 text-lg justify-center ";
  styles += style;
  return (
    <div>
      <ul className={styles}>
        <li className="p-1 m-1 hover:scale-90">
          <a
            href="https://github.com/ojokne/quiz"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub style={iconStyle} />
          </a>
        </li>
        <li className="p-1 m-1 hover:scale-90">
          <Link to="/about">About</Link>
        </li>
        <li className="p-1 m-1 hover:scale-90">
          <Link to="/instructions">Instructions</Link>
        </li>
      </ul>
    </div>
  );
}
export default Menu;

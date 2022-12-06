import { FaGithub } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  const style = { fontSize: "1.5em" };

  return (
    <div className="bg-sky-800 text-slate-200 p-2 flex flex-col justify-center items-center">
      <div>
        <a
          href="https://github.com/ojokne/quiz"
          rel="noreferrer"
          target="_blank"
          className="m-3
          "
        >
          <FaGithub style={style} />
        </a>
      </div>
      <div>
        <p>Copyright &copy; {year}</p>
      </div>
    </div>
  );
}

export default Footer;

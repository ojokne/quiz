import { FaGithub } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  const style = { fontSize: "1.5em" };

  return (
    <div className="bg-slate-900 text-slate-300 p-2 flex flex-col justify-center items-center h-48 overscroll-contain">
      <div className="hover:scale-90">
        <a
          href="https://github.com/ojokne/quiz"
          rel="noreferrer"
          target="_blank"
          className="m-1.5"
        >
          <FaGithub style={style} />
        </a>
      </div>
      <div>
        <p>Copyright&copy; {year}</p>
      </div>
      {/* <div></div> */}
    </div>
  );
}

export default Footer;

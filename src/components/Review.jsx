import { FaTimes, FaCheck } from "react-icons/fa";

function Review({ answer }) {
  let styleCheck = { color: "#86efac", fontSize: "1.5em" };
  let styleTimes = { color: "#fecdd3", fontSize: "1.3em" };

  if (answer.isCorrect) {
    return (
      <div className="border-2 border-slate-700 rounded-md p-2.5 m-2.5 lg:mx-2.5  shadow-md">
        <div className="flex flex-row m-2 p-2 text-green-300">
          <i>
            <FaCheck style={styleCheck} />
          </i>
          <p className="px-2">You passed</p>
        </div>
        <p
          dangerouslySetInnerHTML={answer.question}
          className="font-medium text-lg m-2 p-2 border-b-2 border-slate-700 text-slate-300 "
        ></p>
        <p
          dangerouslySetInnerHTML={answer.createMarkup(answer.answer)}
          className="m-2 p-2 text-green-300"
        ></p>
      </div>
    );
  } else {
    return (
      <div className="border-2 border-slate-700 rounded-md p-2.5 m-2.5 lg:mx-2.5  shadow-md">
        <div className="flex flex-row m-2 p-2 text-rose-200">
          <i>
            <FaTimes style={styleTimes} />
          </i>
          <p className="px-2 text-rose-200">You failed</p>
        </div>
        <p
          dangerouslySetInnerHTML={answer.question}
          className="font-medium text-lg m-2 p-2 border-b-2 border-slate-700 text-slate-300"
        ></p>
        <div className="my-2 py-2">
          <p className="mx-2 px-2 font-medium text-slate-300">Your Answer</p>
          <p
            dangerouslySetInnerHTML={answer.createMarkup(answer.userAnswer)}
            className="mx-2 px-2 text-rose-200"
          ></p>
        </div>
        <div className="my-2 py-2">
          <p className="mx-2 px-2 font-medium text-slate-300">Correct Answer</p>
          <p
            dangerouslySetInnerHTML={answer.createMarkup(answer.answer)}
            className="mx-2 px-2 text-green-300"
          ></p>
        </div>
      </div>
    );
  }
}
export default Review;

import { useEffect, useState } from "react";
import {
  useAnswerDispatch,
  useAnswers,
  useOptions,
} from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import Review from "../components/Review";
import { ACTIONS } from "../store/constants";

function Results() {
  const answers = useAnswers();
  const options = useOptions();
  const navigate = useNavigate();
  const answerDispatch = useAnswerDispatch();
  const [correct, setCorrect] = useState();

  function handleNext() {
    answerDispatch({ type: ACTIONS.CLEAR_STATE });
    navigate("/questions");
  }
  function handleDifficulty() {
    answerDispatch({ type: ACTIONS.CLEAR_STATE });
    navigate("/difficulty");
  }

  function handleCategory() {
    answerDispatch({ type: ACTIONS.CLEAR_STATE });

    navigate("/");
  }
  useEffect(() => {
    let count = 0;
    if (options.category === 0) {
      navigate("/");
    } else {
      for (let i = 0; i < answers.length; i++) {
        if (answers[i].isCorrect) {
          count += 1;
        }
      }
      setCorrect(count);
    }
    // the comment below removes the error React Hook useEffect has missing dependencies:
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <p className="font-bold text-center m-2 p-2 text-sky-800">
          You passed {correct}
        </p>
        {answers.map((a) => {
          return <Review answer={a} key={a.id} />;
        })}
      </div>
      <div className="flex flex-wrap-reverse justify-center ">
        <button
          className="p-2 m-2 bg-sky-800 text-slate-200 w-full lg:w-64  font-medium rounded-md hover:ring-4 hover:ring-offset-2 hover:scale-95"
          onClick={handleCategory}
        >
          Change Category
        </button>
        <button
          className="p-2 m-2 bg-sky-800 text-slate-200 w-full lg:w-64  font-medium rounded-md hover:ring-4 hover:ring-offset-2 hover:scale-95"
          onClick={handleDifficulty}
        >
          Change Difficulty
        </button>

        <button
          className="p-2 m-2 bg-sky-800 text-slate-200 w-full lg:w-64  font-medium rounded-md hover:ring-4 hover:ring-offset-2 hover:scale-95"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Results;

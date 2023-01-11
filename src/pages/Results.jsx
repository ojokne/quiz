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
  }, [answers,navigate,options]);

  return (
    <div className="flex flex-col justify-center items-center mt-16 pt-3 lg:mt-14">
      <div>
        <p className="font-bold text-center m-2 p-2 text-slate-700 dark:text-slate-300">
          You passed {correct}
        </p>
        {answers.map((a) => {
          return <Review answer={a} key={a.id} />;
        })}
      </div>
      <div className="flex flex-wrap-reverse justify-center ">
        <button
          className="p-2 m-2 bg-slate-700 text-slate-300 w-full lg:w-64  font-medium rounded-md hover:ring-4 hover:ring-slate-700 hover:ring-offset-2 hover:scale-95"
          onClick={handleCategory}
        >
          Change Category
        </button>
        <button
          className="p-2 m-2 bg-slate-700 text-slate-300 w-full lg:w-64  font-medium rounded-md hover:ring-4 hover:ring-slate-700 hover:ring-offset-2 hover:scale-95"
          onClick={handleDifficulty}
        >
          Change Difficulty
        </button>

        <button
          className="p-2 m-2 bg-slate-700 text-slate-200 w-full lg:w-64  font-medium rounded-md hover:ring-4 hover:ring-slate-700 hover:ring-offset-2 hover:scale-95"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Results;

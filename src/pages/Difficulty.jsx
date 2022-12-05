import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOptions, useOptionsDispatch } from "../context/ContextProvider";
import { ACTIONS, DIFFICULTY } from "../store/constants";

function Difficulty() {
  const options = useOptions();
  const navigate = useNavigate();
  const optionDispatch = useOptionsDispatch();
  function handleChangeDifficulty(difficulty) {
    optionDispatch({
      type: ACTIONS.CHANGE_DIFFICULTY,
      difficulty: difficulty,
    });
    navigate("/questions");
  }
  useEffect(() => {
    if (options.category === 0) {
      navigate("/");
    }
  });
  return (
    <div className="flex flex-col h-96 justify-center items-center mt-3">
      <div className="border-2 rounded-md p-1.5 my-2.5 lg:mx-2.5  shadow-md">
        <h1 className="font-bold border-b-2 text-2xl m-3 p-3 text-sky-800">
          Choose a difficulty
        </h1>
        <div>
          <button
            className="p-2 m-2 bg-sky-800 text-slate-200 w-72 lg:w-60  font-medium rounded-md hover:ring-4 hover:ring-offset-2 hover:scale-95"
            id={DIFFICULTY.EASY}
            onClick={() => handleChangeDifficulty(DIFFICULTY.EASY)}
          >
            Easy
          </button>
        </div>
        <div>
          <button
            className="p-2 m-2 bg-sky-800 text-slate-200 w-72 lg:w-60  font-medium rounded-md hover:ring-4 hover:ring-offset-2 hover:scale-95"
            id={DIFFICULTY.MEDIUM}
            onClick={() => handleChangeDifficulty(DIFFICULTY.MEDIUM)}
          >
            Medium
          </button>
        </div>
        <div>
          <button
            className="p-2 m-2 mb-6 bg-sky-800 text-slate-200 w-72 lg:w-60  font-medium rounded-md hover:ring-4 hover:ring-offset-2 hover:scale-95"
            id={DIFFICULTY.HARD}
            onClick={() => handleChangeDifficulty(DIFFICULTY.HARD)}
          >
            Hard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Difficulty;

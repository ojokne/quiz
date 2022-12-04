import { useEffect, useState } from "react";
import { useAnswers, useOptions } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import Review from "../components/Review";

function Results() {
  const answers = useAnswers();
  const options = useOptions();
  const navigate = useNavigate();
  const [correct, setCorrect] = useState();

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
    <div>
      <p className="font-bold text-center m-2 p-2">You passed {correct}</p>
      {answers.map((a) => {
        return <Review answer={a} key={a.id} />;
      })}
    </div>
  );
}
export default Results;

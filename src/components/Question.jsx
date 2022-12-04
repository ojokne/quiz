import { useState } from "react";
import { createMarkup } from "../pages/Questions";
import { ACTIONS } from "../store/constants";

function Question({ question, answerDispatch }) {
  const [action, setAction] = useState(ACTIONS.ANSWER);
  function validate(e, answer) {
    let isCorrect = false;
    if (e.target.textContent === answer) {
      isCorrect = true;
    }
    return isCorrect;
  }
  function handleAnswer(e, id, question, answer) {
    let isCorrect = validate(e, answer);
    let userAnswer = e.target.textContent;
    answerDispatch({
      type: ACTIONS.ANSWER,
      id,
      question,
      isCorrect,
      answer,
      userAnswer,
      createMarkup,
    });
  }
  function handleUpdate(e, id, answer) {
    let isCorrect = validate(e, answer);
    let userAnswer = e.target.textContent;

    answerDispatch({ type: ACTIONS.UPDATE, id, isCorrect, userAnswer });
  }

  function handleClick(e, id, question, answer) {
    let action = e.target.dataset.action;
    let parent = e.target.parentElement;
    for (let child of parent.children) {
      child.classList.remove("font-bold");
      child.classList.remove("text-sky-800");
    }
    e.target.classList.add("font-bold");
    e.target.classList.add("text-sky-800");

    if (action === ACTIONS.ANSWER) {
      handleAnswer(e, id, question, answer);
      setAction(ACTIONS.UPDATE);
    } else {
      handleUpdate(e, id, answer);
    }
  }
  return (
    <div className="">
      <div className="border-2 rounded-md p-2.5 m-2.5 lg:mx-2.5  shadow-md">
        <div>
          <p
            className="font-medium text-lg m-2 p-2 border-b-2 "
            dangerouslySetInnerHTML={question.question}
          ></p>
        </div>
        <div className="m-2 p-2">
          {question.answers.map((a, i) => (
            <button
              key={i}
              className="block p-1"
              onClick={(e) =>
                handleClick(
                  e,
                  question.id,
                  question.question,
                  question.correct_answer
                )
              }
              dangerouslySetInnerHTML={question.createMarkup(a)}
              data-action={action}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Question;

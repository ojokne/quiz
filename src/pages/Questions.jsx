import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";
import FadeLoader from "react-spinners/ClipLoader";

import {
  useAnswerDispatch,
  useAnswers,
  useOptions,
} from "../context/ContextProvider";

export function createMarkup(data) {
  return { __html: data };
}

function Questions() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  const options = useOptions();
  const answers = useAnswers();

  const navigate = useNavigate();
  const answerDispatch = useAnswerDispatch();

  function shuffle(array, data) {
    let random = Math.floor((Math.random() * 1e16) % 4);
    array.splice(random, 0, data);
    return array;
  }

  async function fetchQuestions() {
    const questions = new Array(10);
    const res = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${options.category}&difficulty=${options.difficulty}`
    );
    const { results } = await res.json();
    for (let i = 0; i < results.length; i++) {
      let question = results[i];
      let obj = {
        id: i,
        category: question.category,
        type: question.type,
        difficulty: question.difficulty,
        question: createMarkup(question.question),
        correct_answer: question.correct_answer,
        answers: shuffle(question.incorrect_answers, question.correct_answer),
        createMarkup: createMarkup,
      };
      questions[i] = obj;
    }
    setQuestions(questions);
    setLoading(false);
  }
  function handleFinish() {
    if (answers.length < 9) {
      alert("Attempt all questions");
    } else {
      navigate("/results");
    }
  }
  useEffect(() => {
    if (options.category === 0) {
      navigate("/");
    } else {
      fetchQuestions();
    }
    // the comment below removes the error React Hook useEffect has missing dependencies:
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return (
      <div className="flex flex-col h-96 justify-center items-center mt-3">
        <FadeLoader color="#075985" size={70} />
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center mt-3">
      <div>
        {questions.map((q) => (
          <Question key={q.id} question={q} answerDispatch={answerDispatch} />
        ))}
      </div>
      <div>
        <button
          className="p-2 m-2 bg-sky-800 text-slate-200 w-64 lg:w-60  font-medium rounded-md hover:ring-4 hover:ring-offset-2 hover:scale-95"
          onClick={handleFinish}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Questions;

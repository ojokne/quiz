import { useCallback, useEffect, useState } from "react";
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
  const navigate = useNavigate();
  const options = useOptions();
  const answers = useAnswers();
  const answerDispatch = useAnswerDispatch();

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFunction = useCallback(
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
    },
    [options.category, options.difficulty]
  );

  function shuffle(array, data) {
    let random = Math.floor((Math.random() * 1e16) % 4);
    array.splice(random, 0, data);
    return array;
  }
  function handleFinish() {
    if (answers.length < 9) {
      alert("Attempt all questions");
    } else {
      navigate("/results");
    }
  }
  useEffect(() => {
    setQuestions([]);
    if (options.category === 0) {
      navigate("/");
    } else {
      fetchFunction();
    }
  }, [fetchFunction, options.category, navigate]);
  if (loading) {
    return (
      <div className="flex flex-col h-96 justify-center items-center mt-16 pt-3 lg:mt-14">
        <FadeLoader color="#cbd5e1" />
        <p className="text-slate-300">Loading ...</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center mt-16 pt-3 lg:mt-14">
      <div>
        {questions.map((q) => (
          <Question key={q.id} question={q} answerDispatch={answerDispatch} />
        ))}
      </div>
      <div>
        <button
          className="p-2 m-2 bg-slate-700 text-slate-300 w-80 lg:w-64  font-medium rounded-md hover:ring-4 hover:ring-slate-700 hover:ring-offset-2 hover:scale-95"
          onClick={handleFinish}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Questions;

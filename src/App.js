import "./index.css";
import { useReducer, useState } from "react";
import reducer from "./store/reducer";
import Header from "./components/Header";
import Categories from "./pages/Categories";
import Difficulty from "./pages/Difficulty";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Questions from "./pages/Questions";
import answerReducer from "./store/answerReducer";
import Results from "./pages/Results";

export const ACTIONS = {
  CHANGE_CATEGORY: "change category of quiz",
  CHANGE_DIFFICULTY: "change quiz difficulty",
  CLEAR_STATE: "remove state data",
  ANSWER: "answer",
  UPDATE: "update",
};

export const DIFFICULTY = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
};
function initialState() {
  return {
    difficulty: DIFFICULTY.EASY,
    category: 0,
  };
}
function App() {
  const [state, dispatch] = useReducer(reducer, null, initialState);
  const [answers, answerDispatch] = useReducer(answerReducer, []);
  const [questions, setQuestions] = useState([]);

  return (
    <div className="antialiased font-sans">
      <Header />
      <div className="max-w-4xl m-auto">
        <Routes>
          <Route path="/" element={<Categories dispatch={dispatch} />}></Route>
          <Route
            path="/difficulty"
            element={<Difficulty dispatch={dispatch} />}
          ></Route>
          <Route
            path="/questions"
            element={
              <Questions
                state={state}
                questions={questions}
                setQuestions={setQuestions}
                answerDispatch={answerDispatch}
                answers={answers}
              />
            }
          ></Route>
          <Route
            path="/results"
            element={<Results answers={answers} state={state} />}
          />
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

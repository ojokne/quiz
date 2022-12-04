import { createContext, useContext, useReducer } from "react";
import answerReducer from "../reducers/answerReducer";
import questionReducer from "../reducers/questionReducer";
import { DIFFICULTY } from "../store/constants";

const Questions = createContext();
const Answers = createContext();

const QuestionDispatch = createContext();
const AnswerDispatch = createContext();

function initialState() {
  return {
    difficulty: DIFFICULTY.EASY,
    category: 0,
  };
}

function QuestionProvider({ children }) {
  const [questions, questionDispatch] = useReducer(
    questionReducer,
    null,
    initialState
  );
  const [answers, answerDispatch] = useReducer(answerReducer, []);
  return (
    <Questions.Provider value={questions}>
      <QuestionDispatch.Provider value={questionDispatch}>
        <Answers.Provider value={answers}>
          <AnswerDispatch.Provider value={answerDispatch}>
            {children}
          </AnswerDispatch.Provider>
        </Answers.Provider>
      </QuestionDispatch.Provider>
    </Questions.Provider>
  );
}
export default QuestionProvider;

export function useQuestions() {
  return useContext(Questions);
}

export function useQuestionsDispatch() {
  return useContext(QuestionDispatch);
}

export function useAnswers() {
  return useContext(Answers);
}

export function useAnswerDispatch() {
  return useContext(AnswerDispatch);
}

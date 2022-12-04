import { createContext, useContext, useReducer } from "react";
import answerReducer from "../reducers/answerReducer";
import optionReducer from "../reducers/optionReducer";
import { DIFFICULTY } from "../store/constants";

const Options = createContext();
const Answers = createContext();

const OptionDispatch = createContext();
const AnswerDispatch = createContext();

function initialState() {
  return {
    difficulty: DIFFICULTY.EASY,
    category: 0,
  };
}

function ContextProvider({ children }) {
  const [options, optionDispatch] = useReducer(
    optionReducer,
    null,
    initialState
  );
  const [answers, answerDispatch] = useReducer(answerReducer, []);
  return (
    <Options.Provider value={options}>
      <OptionDispatch.Provider value={optionDispatch}>
        <Answers.Provider value={answers}>
          <AnswerDispatch.Provider value={answerDispatch}>
            {children}
          </AnswerDispatch.Provider>
        </Answers.Provider>
      </OptionDispatch.Provider>
    </Options.Provider>
  );
}
export default ContextProvider;

export function useOptions() {
  return useContext(Options);
}

export function useOptionsDispatch() {
  return useContext(OptionDispatch);
}

export function useAnswers() {
  return useContext(Answers);
}

export function useAnswerDispatch() {
  return useContext(AnswerDispatch);
}

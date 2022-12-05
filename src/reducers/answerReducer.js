import { ACTIONS } from "../store/constants";

function answerReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ANSWER: {
      return [
        ...state,
        {
          id: action.id,
          question: action.question,
          isCorrect: action.isCorrect,
          answer: action.answer,
          userAnswer: action.userAnswer,
          createMarkup: action.createMarkup,
        },
      ];
    }
    case ACTIONS.UPDATE: {
      return state.map((a) => {
        if (a.id === action.id) {
          return {
            ...a,
            isCorrect: action.isCorrect,
            userAnswer: action.userAnswer,
          };
        } else {
          return a;
        }
      });
    }

    case ACTIONS.CLEAR_STATE: {
      return [];
    }

    default: {
      return state;
    }
  }
}
export default answerReducer;

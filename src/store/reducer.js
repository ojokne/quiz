import { ACTIONS } from "../App";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_CATEGORY: {
      return { ...state, category: action.category };
    }
    case ACTIONS.CHANGE_DIFFICULTY: {
      return { ...state, difficulty: action.difficulty };
    }
    case ACTIONS.CLEAR_STATE: {
      return { ...state, category: "", difficulty: "" };
    }
    default: {
      return state;
    }
  }
}

export default reducer;

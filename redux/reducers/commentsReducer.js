import actionTypes from "../actions/actionTypes";

const initialState = {
  comments: [],
  status: "idle",
  darkmode: false
};

export const commentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_STATE:
      console.log('redux reducers running, payload:',payload)
      return { ...state, ...payload };
    case actionTypes.GET_COMMENTS:
      return { ...state, comments: payload, status: "idle" };
    case actionTypes.POST_COMMENT:
      let comments = state.comments
      comments.unshift(payload)
      return { ...state, comments, status: "idle" };
    default:
      return state;
  }
};

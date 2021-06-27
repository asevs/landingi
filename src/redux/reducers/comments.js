import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from '../actions/actionTypes';
const initialState = { isLoading: false, comments: [] };

export const comments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      const comments = [...state.comments, ...action.payload].filter(
        (v, i, a) => a.findIndex((t) => t.id === v.id) === i
      );

      return {
        ...state,
        comments: comments,
        isLoading: false,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        isLoading: false,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

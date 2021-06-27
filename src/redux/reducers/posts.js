import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../actions/actionTypes';
const initialState = { isLoading: false, posts: [] };

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

import { LIKE_POST } from '../actions/actionTypes';
const initialState = { isLoading: false, likedPosts: [] };

export const user = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_POST:
      return {
        ...state,
        likedPosts: action.payload,
        isLoading: true,
      };
    default:
      return state;
  }
};

import { LIKE_POST } from '../actions/actionTypes';

export const likePost = (postId) => async (dispatch) => {
  dispatch({ type: LIKE_POST, payload: postId });
};

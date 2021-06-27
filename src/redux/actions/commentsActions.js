import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from '../actions/actionTypes';
import { soFetch } from '../../helpers/fetch';

export const addComment = (data) => async (dispatch) => {
  dispatch({ type: ADD_COMMENT });
  return await soFetch('/comments', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((data) =>
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: { ...data, id: new Date().getUTCMilliseconds() },
      })
    )
    .catch(() => dispatch({ type: ADD_COMMENT_FAILURE }));
};

export const fetchComments = (postId) => async (dispatch) => {
  dispatch({ type: FETCH_COMMENTS });
  return await soFetch(`/comments?postId=${postId}`)
    .then((data) => dispatch({ type: FETCH_COMMENTS_SUCCESS, payload: data }))
    .catch(() => dispatch({ type: FETCH_COMMENTS_FAILURE }));
};

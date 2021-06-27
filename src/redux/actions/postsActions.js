import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from './actionTypes';
import { soFetch } from '../../helpers/fetch';

export const fetchPosts = async (dispatch) => {
  dispatch({ type: FETCH_POSTS });
  return await soFetch('/posts')
    .then((data) => dispatch({ type: FETCH_POSTS_SUCCESS, payload: data }))
    .catch(() => dispatch({ type: FETCH_POSTS_FAILURE }));
};

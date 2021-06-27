import { posts } from './posts';
import { comments } from './comments';
import { user } from './user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  comments,
  posts,
  user,
});
export default rootReducer;

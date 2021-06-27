import React from 'react';
import { Comment } from '../';
export const Comments = ({ comments }) => (
  <React.Fragment>
    {comments
      .slice(0)
      .reverse()
      .map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
  </React.Fragment>
);

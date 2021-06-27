import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../redux/actions/commentsActions';

export const CommentForm = ({ postId }) => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const onSubmitComment = async (e) => {
    e.preventDefault();
    if (description && postId) {
      dispatch(addComment({ postId: postId, body: description }));
      setDescription('');
    }
  };

  return (
    <form onSubmit={(e) => onSubmitComment(e)}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add new comment"
      />
    </form>
  );
};

import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Comments, CommentForm } from '../components';
import { fetchComments } from '../redux/actions/commentsActions';

export const PostDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const comments = useSelector((state) =>
    state.comments.comments.filter((comment) => comment.postId == id)
  );

  useEffect(() => {
    dispatch(fetchComments(id));
  }, []);

  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <CommentForm postId={id} />
        <Comments comments={comments} />
      </Suspense>
    </div>
  );
};

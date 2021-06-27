import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { likePost } from '../../redux/actions/userActions';
import styles from './Post.module.css';

export const Post = ({ post }) => {
  const [isLikePost, setIsLikePost] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const likedPosts = useSelector((state) => state.user.likedPosts);

  const redirectToDetailsPage = () => {
    history.push(`/details/${post.id}`);
  };

  const handleLikePost = () => {
    if (isLikePost) {
      likedPosts.splice(likedPosts.indexOf(post.id), 1);
    } else {
      likedPosts.push(post.id);
    }

    dispatch(likePost(likedPosts)).then(setIsLikePost(!isLikePost));
  };

  useEffect(() => {
    if (likedPosts.indexOf(post.id) >= 0) {
      setIsLikePost(true);
    }
  }, []);

  return (
    <div className={styles.post}>
      <h1>{post.title}</h1>
      <p>Lipiec 10, 2021</p>
      <button onClick={handleLikePost}>
        {isLikePost ? 'UNLIKE!' : 'LIKE!'}
      </button>
      <p>{post.body}</p>
      <button onClick={redirectToDetailsPage}>READ MORE</button>
    </div>
  );
};

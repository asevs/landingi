import React, { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/actions/postsActions';
import { Posts } from '../../components';
import styles from './PostsPage.module.css';
export const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts);
  }, []);

  return (
    <div className={styles.wrapper}>
        <Posts posts={posts} />

    </div>
  );
};

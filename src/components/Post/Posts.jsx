import React from 'react';
import { Post } from '../';
export const Posts = ({ posts }) => (
  <React.Fragment>
    {posts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </React.Fragment>
);

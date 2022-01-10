import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './Posts.css';
import Post, { PostProps } from '../post/Post';


const Posts = () =>
{
  const [posts, setPosts] = useState<PostProps[] | undefined>();

  useEffect(() =>
  {
    try
    {
      const fetchPosts = async () =>
      {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        setPosts(await response.json());
      }
      fetchPosts();
    }
    catch (e)
    {
      console.log(e)
      setPosts(undefined)
    }

    return () =>
    {
      // cleanup
    }
  }, [])

  useEffect(() =>
  {
    console.log(posts)

  }, [posts])

  return (
    <div className="Posts">
      <header className="Posts-header">
        <div className="accordion">
          {posts?.map(({ id, userId, title, body }) => (
            <Post key={id} id={id} title={title} userId={userId} body={body} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default Posts;

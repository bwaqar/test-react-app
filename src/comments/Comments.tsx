import React, { useEffect, useState } from 'react';

interface CommentProps
{
  id: number;
  postId?: number;
  name: string;
  email: string;
  body: string;
}

const Comment = ({ postId, id, name, email, body }: CommentProps) =>
{

  return (<div>
    <div>
      <div>{`${id} - ${name} - ${email}`}</div>
      <p>{body}</p>
    </div >
  </div>)
}

const Comments = ({ postId }: { postId: number }) =>
{
  const [comments, setComments] = useState<CommentProps[] | undefined>();

  useEffect(() =>
  {
    try
    {
      const fetchPosts = async () =>
      {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        const result = await response.json();
        setComments(result.filter(({ postId: pId }: { postId: number }) => pId === postId));
      }
      fetchPosts();
    }
    catch (e)
    {
      console.log(e)
      setComments(undefined)
    }
    return () =>
    {
      // cleanup
    }
  }, [postId])

  useEffect(() =>
  {
    console.log({ comments })

  }, [comments])
  return (
    <div className="accordion">
      {comments?.map(({ id, name, email, body }) => (
        <Comment key={id} id={id} name={name} email={email} body={body} />
      ))}
    </div>
  );
};




export default Comments;
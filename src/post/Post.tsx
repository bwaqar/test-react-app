import React, { useState } from 'react';
import Comments from '../comments/Comments';

export interface PostProps{
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Post = ({ id, userId, title, body }: PostProps) => {
  const [isActive, setIsActive] = useState(false);
  const [areCommentsActive, setAreCommentsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{`${isActive ? '-' : '+'} ${title}`}</div>
      </div>
      {isActive && <div className="accordion-content">
        <p>{body}</p>
        <div className="accordion-title" onClick={() => setAreCommentsActive(!areCommentsActive)}>
        <div>{`${areCommentsActive ? 'Hide Comments' : 'Show Comments'}`}</div>
      </div>
        {areCommentsActive && <Comments postId={id}></Comments>}
        </div>}
    </div>
  );
};

export default Post;
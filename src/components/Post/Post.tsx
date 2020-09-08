import React from "react";
import "./Post.scss";

interface PostProps {
  profilePic: string;
  image: string;
  username: string;
  timestamp: string;
  message: string;
}

const Post: React.FC<PostProps> = ({
  profilePic,
  image,
  username,
  timestamp,
  message,
}) => {
  return <div className="post">Post</div>;
};

export default Post;

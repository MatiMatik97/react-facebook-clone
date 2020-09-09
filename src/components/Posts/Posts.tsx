import React, { useState, useEffect } from "react";
import "./Posts.scss";
import Post from "../Post/Post";
import db from "../../firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

interface PostProps {
  id: string;
  data: firebase.firestore.DocumentData;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    try {
      db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setPosts(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    } catch (error) {
      console.error(error);
    }
  }, []);

  const formatDate = (timestamp: number | undefined) => {
    if (timestamp) {
      const date = new Date();
      date.setTime(timestamp * 1000);
      return date.toLocaleString(undefined, {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    }
    return " ";
  };

  return (
    <div className="posts">
      <FlipMove enterAnimation="fade" leaveAnimation="fade">
        {posts.map((post) => (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={formatDate(post.data.timestamp?.seconds)}
            username={post.data.username}
            image={post.data.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Posts;

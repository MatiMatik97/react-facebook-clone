import React, { useState, useEffect } from "react";
import "./Posts.scss";
import Post from "../Post/Post";
import db from "../../firebase";
import firebase from "firebase";

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

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp?.seconds}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Posts;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const [singlePost, setSinglePost] = useState({});
  const [wasLiked, setWasLiked] = useState(parseInt(localStorage.getItem("wasLiked")) || 0);
  let { id } = useParams();

  function handleDelete() {
    fetch(`http://localhost:8080/posts/post/${id}`, { method: `DELETE` });
  }

  useEffect(() => {
    getSinglePost();
  }, [wasLiked, localStorage, handleLike]);

  async function getSinglePost() {
    const response = await fetch(`http://localhost:8080/posts/post/${id}`);
    const data = await response.json();
    setSinglePost(data[0]);
  }

  function handleLike() {
    if (wasLiked === 0 || wasLiked === undefined) {
      setWasLiked(1);
      localStorage.setItem("wasLiked", 1);
      fetch(`http://localhost:8080/posts/post/${id}/like`, { method: `PUT` });
      console.log("The post was liked");
    } else {
      setWasLiked(0);
      localStorage.setItem("wasLiked", 0);
      fetch(`http://localhost:8080/posts/post/${id}/unlike`, { method: `PUT` });
      console.log("The post was unlked");
    }
  }

  return (
    <div>
      <p>{singlePost.id}</p>
      <p>{singlePost.title}</p>
      <p>{singlePost.content}</p>
      <p>
        ❤️ {singlePost.likes}
        <span>
          <button onClick={handleLike}>Like</button>
        </span>
      </p>
      <button onClick={handleDelete}>DELETE POST</button>
    </div>
  );
}

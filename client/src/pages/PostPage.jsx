import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const [singlePost, setSinglePost] = useState({});
  let { id } = useParams();

  function handleDelete() {
    fetch(`http://localhost:8080/posts/post/${id}`, { method: `DELETE` });
  }

  useEffect(() => {
    getSinglePost();
  }, []);

  async function getSinglePost() {
    const response = await fetch(`http://localhost:8080/posts/post/${id}`);
    const data = await response.json();
    setSinglePost(data[0]);
  }

  return (
    <div>
      <p>{singlePost.id}</p>
      <p>{singlePost.title}</p>
      <p>{singlePost.content}</p>
      <p>❤️ {singlePost.likes}</p>
      <button onClick={handleDelete}>DELETE POST</button>
    </div>
  );
}

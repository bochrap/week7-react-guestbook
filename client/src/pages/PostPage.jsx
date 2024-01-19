import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const [singlePost, setSinglePost] = useState({});
  let { id } = useParams();

  useEffect(() => {
    getSinglePost();
  }, []);

  async function getSinglePost() {
    const response = await fetch(`http://localhost:8080/posts/${id}`);
    const data = await response.json();
    setSinglePost(data[0]);
  }

  return (
    <div>
      <p>{singlePost.id}</p>
      <p>{singlePost.title}</p>
      <p>{singlePost.content}</p>
    </div>
  );
}
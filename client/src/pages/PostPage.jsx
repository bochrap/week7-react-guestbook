import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  let { id } = useParams();
  const [singlePost, setSinglePost] = useState({});
  // const [wasLiked, setWasLiked] = useState(parseInt(localStorage.getItem("wasLiked")) || 0);
  const [likeStates, setLikeStates] = useState(() => {
    const storedState = localStorage.getItem(`wasLiked_${id}`);
    return { [`wasLiked${id}`]: storedState ? parseInt(storedState) : 0 };
  });

  function handleDelete() {
    fetch(`http://localhost:8080/posts/post/${id}`, { method: `DELETE` });
  }

  useEffect(() => {
    getSinglePost();
  }, [localStorage, handleLike, likeStates]);

  async function getSinglePost() {
    const response = await fetch(`http://localhost:8080/posts/post/${id}`);
    const data = await response.json();
    setSinglePost(data[0]);
  }

  function handleLike() {
    const currentLikeState = likeStates[`wasLiked${id}`];

    if (currentLikeState === 0 || currentLikeState === undefined) {
      setLikeStates((prevStates) => ({
        ...prevStates,
        [`wasLiked${id}`]: 1,
      }));
      // setWasLiked(1);
      localStorage.setItem(`wasLiked_${id}`, 1);
      fetch(`http://localhost:8080/posts/post/${id}/like`, { method: `PUT` });
      console.log("The post was liked");
    } else {
      setLikeStates((prevStates) => ({
        ...prevStates,
        [`wasLiked${id}`]: 0,
      }));
      // setWasLiked(0);
      localStorage.setItem(`wasLiked_${id}`, 0);
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

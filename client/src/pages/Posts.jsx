import { useState, useEffect } from "react";

export default function Posts() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  });

  async function getAllPosts() {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();

    setAllPosts(data);
  }

  return (
    <div>
      <p>All the posts:</p>
      <ul>
        {allPosts.map((item) => {
          return (
            <div key={"div" + item.id}>
              <li key={item.id + item.title}>{item.title}</li>
              <p>Likes: {item.likes}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

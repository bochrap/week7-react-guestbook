import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AllPostsList() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
    // getCategoryPosts();
  }, []);

  async function getAllPosts() {
    const response = await fetch(`http://localhost:8080/posts/category/`);
    const data = await response.json();

    setAllPosts(data);
  }

  return (
    <div id="posts-list">
      <p>All the posts:</p>
      <ul>
        {allPosts.map((item) => {
          return (
            <div key={"div" + item.id}>
              <li key={item.id + item.title}>
                <Link to={`/posts/post/${item.id}`}>{item.title}</Link>
              </li>
              <p>❤️ {item.likes}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function CategoryPostsList() {
  const [allPosts, setAllPosts] = useState([]);
  const { id } = useParams();
  // const [byCategory, setByCategory] = useState([]);

  useEffect(() => {
    getCategoryPosts();
    // getCategoryPosts();
  }, [id]);

  async function getCategoryPosts() {
    const response = await fetch(`http://localhost:8080/posts/category/${id}`);
    const data = await response.json();

    setAllPosts(data);
  }

  // async function getCategoryPosts() {
  //   const response = await fetch(`http://localhost:8080/posts/category/${id}`);
  //   const data = await response.json();

  //   setByCategory(data);
  // }

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

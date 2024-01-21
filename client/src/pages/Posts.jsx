import { useState, useEffect } from "react";
import { Link, useParams, Routes, Route } from "react-router-dom";
import PostsList from "./PostsList";

export default function Posts() {
  const [allPosts, setAllPosts] = useState([]);
  // const [byCategory, setByCategory] = useState([]);

  useEffect(() => {
    getAllPosts();
    // getCategoryPosts();
  }, []);

  async function getAllPosts() {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();

    setAllPosts(data);
  }

  // async function getCategoryPosts() {
  //   const response = await fetch(`http://localhost:8080/posts/category/`);
  //   const data = await response.json();

  //   setByCategory(data);
  // }

  return (
    <div>
      <div id="links-sort-div">
        <span>Sort by:</span>
        <span>All</span>
        <span>Technology</span>
        <span>Travel</span>
        <span>Food</span>
        <span>Lifestyle</span>
      </div>
      <PostsList />
      {/* <p>All the posts:</p>
      <ul>
        {allPosts.map((item) => {
          return (
            <div key={"div" + item.id}>
              <li key={item.id + item.title}>
                <Link to={`/posts/${item.id}`}>{item.title}</Link>
              </li>
              <p>❤️ {item.likes}</p>
            </div>
          );
        })}
      </ul> */}
    </div>
  );
}

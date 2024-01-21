import { Link, Outlet } from "react-router-dom";

export default function Posts() {
  // const [allPosts, setAllPosts] = useState([]);
  // const [byCategory, setByCategory] = useState([]);

  // useEffect(() => {
  //   getAllPosts();
  //   // getCategoryPosts();
  // }, []);

  // async function getAllPosts() {
  //   const response = await fetch("http://localhost:8080/posts");
  //   const data = await response.json();

  //   setAllPosts(data);
  // }

  // async function getCategoryPosts() {
  //   const response = await fetch(`http://localhost:8080/posts/category/`);
  //   const data = await response.json();

  //   setByCategory(data);
  // }

  return (
    <div>
      <div id="links-sort-div">
        <span>Sort by:</span>
        <Link to={`/posts/category/`}>
          <span>All</span>
        </Link>
        <Link to={`/posts/category/1`}>
          <span>Technology</span>
        </Link>
        <Link to={`/posts/category/2`}>
          <span>Travel</span>
        </Link>
        <Link to={`/posts/category/3`}>
          <span>Food</span>
        </Link>
        <Link to={`/posts/category/4`}>
          <span>Lifestyle</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

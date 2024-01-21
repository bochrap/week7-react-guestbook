import { Link, Outlet } from "react-router-dom";

export default function Posts() {
  return (
    <div id="content">
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

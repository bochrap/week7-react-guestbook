import { NavLink, Outlet } from "react-router-dom";

export default function Posts() {
  return (
    <div id="content">
      <div id="links-sort-div">
        <span>Sort by:</span>
        <NavLink to={`/posts/category/`}>
          <span>All</span>
        </NavLink>
        <NavLink to={`/posts/category/1`}>
          <span>Technology</span>
        </NavLink>
        <NavLink to={`/posts/category/2`}>
          <span>Travel</span>
        </NavLink>
        <NavLink to={`/posts/category/3`}>
          <span>Food</span>
        </NavLink>
        <NavLink to={`/posts/category/4`}>
          <span>Lifestyle</span>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

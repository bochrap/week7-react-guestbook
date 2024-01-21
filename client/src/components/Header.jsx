import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Week 7 Blog</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts/category">Posts</NavLink>
        <NavLink to="/newPost">New Post</NavLink>
      </nav>
    </header>
  );
}

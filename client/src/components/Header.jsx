import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>myPage</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts/category">Posts</Link>
        <Link to="/newPost">New Post</Link>
      </nav>
    </header>
  );
}

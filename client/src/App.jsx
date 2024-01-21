import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import HomePage from "./pages/HomePage";
import NewPost from "./pages/NewPost";
import Footer from "./components/Footer";
import PostPage from "./pages/PostPage";
import AllPostsList from "./components/AllPostsList";
import CategoryPostsList from "./components/CategoryPostsList";

export default function App() {
  return (
    <div id="main">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/category/" element={<Posts />}>
          <Route path="/posts/category/" element={<AllPostsList />} />
          <Route path="/posts/category/:id" element={<CategoryPostsList />} />
        </Route>
        <Route path="/newPost" element={<NewPost />} />
        <Route path="/posts/post/:id" element={<PostPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

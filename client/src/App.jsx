import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import HomePage from "./pages/HomePage";
import NewPost from "./pages/NewPost";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="main">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/newPost" element={<NewPost />} />
      </Routes>
      <Footer />
    </div>
  );
}

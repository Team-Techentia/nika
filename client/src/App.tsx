import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Congratulation, Footer, Navbar } from "./components";
import { About, Article, ArticlePage, Blog, Error404, Home, Privacy, Terms, Waitlist, WebApp, } from "./pages";
import blog from "./utils/blog";
import { useEffect,useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from './store/slices';
import { RootState } from './store/store';

function App() {

  const dispatch = useDispatch();
  const blogs: blog[] = useSelector((state: RootState) => state.main.blogs);
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs`);
      const fetchedBlogs = res.data.data.map((Blogs:any) => ({
        img: Blogs.coverImage || '',
        title: Blogs.title,
        post: Blogs.post,
        tag: Blogs.tag,
        date: Blogs.date,
      }));
      dispatch(setBlogs(fetchedBlogs));
    } catch (e: any) {
      console.log(e)
    }

  }
  useEffect(() => {
    window.scrollTo(0, 0);

    fetchBlogs()
  }, [])

  const tags: string[] = [
    "All",
    "Tag",
    "DeFi Tutorials",
    "Insights",
    "Updates",
    "Investment Strategies",
  ];

  const [congrats, setCongrats] = useState(false);

  return (
    <>
      {congrats && <Congratulation setCongrats={setCongrats} />}

      <div className={`${congrats && "h-screen overflow-auto"}`}>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home congrats={congrats} setCongrats={setCongrats} />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog blogs={blogs} tags={tags} />} />
            <Route path="/blog/articles-news" index element={<Article blogs={blogs.slice(0, 3)} />} />
            <Route path="/blog/:title" element={<ArticlePage blogs={blogs} tags={tags} />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/webapp" element={<WebApp />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;

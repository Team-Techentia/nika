import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Alert, Congratulation, Footer, Navbar } from "./components";
import { About, Article, ArticlePage, Blog, Dashboard, Error404, Home, Privacy, Terms, Waitlist, WebApp, } from "./pages";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from './store/slices';
import { RootState } from './store/store';
import { Blogs } from "./interfaces";

function App() {

  const dispatch = useDispatch();

  const blogs: Blogs[] = useSelector((state: RootState) => state.main.blogs);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs`);
      const fetchedBlogs = res.data.data.map((Blogs: any) => ({
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

  const alert = useSelector((state: RootState)=> state.ui.alert);

  return (
    <>
      {congrats && <Congratulation setCongrats={setCongrats} />}

      {alert.message && <Alert />}

      <div className={`${congrats && "h-screen overflow-auto"}`}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<><Navbar /><Home congrats={congrats} setCongrats={setCongrats} /> </>} />
            <Route path="/about" element={<><Navbar /><About /> </>} />
            <Route path="/blog" element={<><Navbar /><Blog blogs={blogs} tags={tags} /> </>} />
            <Route path="/blog/articles-news" index element={<><Navbar /><Article blogs={blogs.slice(0, 3)} /> </>} />
            <Route path="/blog/:title" element={<><Navbar /><ArticlePage blogs={blogs} tags={tags} /> </>} />
            <Route path="/privacy" element={<><Navbar /><Privacy /> </>} />
            <Route path="/terms" element={<><Navbar /><Terms /> </>} />
            <Route path="/waitlist" element={<><Navbar /><Waitlist /> </>} />
            <Route path="/webapp" element={<><Navbar /><WebApp /> </>} />
            <Route path="*" element={<><Navbar /><Error404 /> </>} />
            <Route path="/dashboard" element={<><Dashboard /> </>} />
            <Route path="/profile" element={<><Dashboard /> </>} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;

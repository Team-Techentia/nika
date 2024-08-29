import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
  About,
  Article,
  Blog,
  Error404,
  Home,
  Privacy,
  Terms,
  Waitlist,
  WebApp,
} from "./pages";
import { useSelector } from "react-redux";
import { RootSate } from "./store/store";

function App() {
  const navOpen = useSelector((state: RootSate) => state.ui.navOpen);

  console.log(navOpen);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/articles-news" index element={<Article />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/webapp" element={<WebApp />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header";
import BlogContent from "./Components/BlogContent";
import Pagination from "./Components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";

function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="w-full h-full ">
      <Header />
      <div className="flex flex-col justify-center items-center font " >
        <BlogContent />
      </div>

      <Pagination />
    </div>
  );
}

export default App;

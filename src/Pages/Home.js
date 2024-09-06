import React from "react";
import Header from "../Components/Header";
import BlogContent from "../Components/BlogContent";
import Pagination from "../Components/Pagination";

const Home = () => {
  return (
    <div className="w-full h-full ">
      <Header />
      <div className="flex flex-col justify-center items-center ">
        <BlogContent />
      </div>

      <Pagination />
    </div>
  );
};

export default Home;

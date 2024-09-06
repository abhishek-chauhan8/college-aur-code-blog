import React from "react";
import Header from "../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import BlogContent from "../Components/BlogContent";
import Pagination from "../Components/Pagination";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div className="mt-20 ">
      <Header />
      <div className="flex mx-auto max-w-[1050px] w-11/12 items-center mt-24 gap-10">
        <button
          onClick={() => navigation(-1)}
          className="border-[2px] border-gray-300  py-2 px-6 rounded-md text-base    "
        >
          Back
        </button>
        <h2 className=" text-2xl leading-relaxed ">
          Blogs tagged <span className="text-3xl font-bold ml-3"> #{tag}</span>
        </h2>
      </div>
      <BlogContent />
      <Pagination />
    </div>
  );
};

export default TagPage;

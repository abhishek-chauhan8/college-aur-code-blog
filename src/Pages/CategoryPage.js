import React from "react";
import Header from "../Components/Header";
import BlogContent from "../Components/BlogContent";
import Pagination from "../Components/Pagination";
import { useLocation, useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div className=" mt-20">
      {" "}
      <div>
        <Header />
        <div className="flex mx-auto max-w-[1100px] w-11/12 items-center mt-24 gap-10">
          <button
            onClick={() => navigation(-1)}
            className="border-[2px] border-gray-300  py-2 px-6 rounded-md text-base "
          >
            Back
          </button>
          <h2 className=" text-2xl leading-relaxed">
            Blogs on <span className="text-3xl font-bold "> {category}</span>
          </h2>
        </div>
        <BlogContent />
        <Pagination />
      </div>
    </div>
  );
};

export default CategoryPage;

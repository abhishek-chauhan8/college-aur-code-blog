import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="mt-6  flex-col flex mx-auto  w-11/12 max-w-[1100px]">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-2xl text-blue-700 mb-2">
          {" "}
          {post.title}
        </span>
      </NavLink>
      <p className="text-md">
        by{" "}
        <span className="text-gray-700 italic font-bold "> {post.author} </span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-bold  underline">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-gray-700 text-sm mb-2 ">
        Posted on <span> {post.date}</span>
      </p>
      <p className="text-xl mb-3 font-normal  font-Lato ">{post.content}</p>
      <div className="text-blue-700 italic ">
        {post.tags.map((tag, index) => {
          return (
            <NavLink key={index} to={`/tag/${tag.replaceAll(" ", "-")}`}>
              <span>{` #${tag}`}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BlogDetails;

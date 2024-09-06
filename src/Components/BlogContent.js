import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "../Pages/BlogDetails";

const BlogContent = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="flex flex-col mx-auto max-w-[1150px] w-11/12  mb-28 mt-20">
      {loading ? (
        <Spinner/>
      ) : posts.length === 0 ? (
        <div>
          <p>No post found</p>
        </div>
      ) : (
        posts.map((post) => (
          <BlogDetails key={post.id} post={post} />
        ))
      )}
    </div>
  );
};
export default BlogContent;

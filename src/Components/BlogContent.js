import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const BlogContent = () => {
  const { posts, loading } = useContext(AppContext);

  console.log(loading)

  return (
    <div className="w-11/12 max-w-[1100px]  mb-28 mt-20    ">
      {loading ? (
        <Spinner/>
      ) : posts.length === 0 ? (
        <div>
          <p>No post found</p>
        </div>
      ) : (
        posts.map((post) => (
          <Card key={post.id} post={post} />
        ))
      )}
    </div>
  );
};
export default BlogContent;

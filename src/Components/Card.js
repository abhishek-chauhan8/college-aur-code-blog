import React from "react";

const Card = ({ post }) => {
  return (
    <div className="mt-10">
      <div key={post.id}>
        <p className="font-bold text-2xl text-blue-700 mb-2">{post.title}</p>
        <p className="text-md">
          By{" "}
          <span className="text-gray-700 italic font-bold ">{post.author}</span>{" "}
          on <span className="font-bold  underline">{post.category}</span>
        </p>
        <p className="text-gray-700 text-sm mb-2 ">Posted on {post.date}</p>
        <p className="text-xl mb-3 font-normal  font-Lato ">{post.content}</p>
        <div className="text-blue-700 italic ">
          {post.tags.map((tag, index) => {
            return <span key={index}>{` #${tag}`}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Comment from "./Comment";

function PostComments() {
  return (
    <div className="post-comments">
      <Comment />
      <Comment />
      {/* Mas Comentarios */}
    </div>
  );
}

export default PostComments;

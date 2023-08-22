import React from "react";

import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostInteractions from "./PostInteractions";
import PostCaption from "./PostCaption";
import PostComments from "./PostComments";
import PostTimestamp from "./PostTimestamp";
import PostOptions from "./PostOptions";

function PostContainer() {
  return (
    <div className="post-container">
      <PostHeader />
      <PostMedia />
      <PostInteractions />
      <PostCaption />
      <PostComments />
      <PostTimestamp />
      <PostOptions />
    </div>
  );
}

export default PostContainer;

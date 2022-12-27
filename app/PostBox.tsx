import React from "react";
import Avatar from "./Avatar";
import Form from "./Form";

type Props = {
  subreddit?: string;
};

function PostBox({ subreddit }: Props) {
  return (
    <div className="sticky top-16 z-40">
      <div className="flex space-x-3 bg-white border border-gray-300 rounded-md p-2">
        {/* @ts-expect-error Server Component */}
        <Avatar />
        <Form subreddit={subreddit} />
      </div>
    </div>
  );
}

export default PostBox;

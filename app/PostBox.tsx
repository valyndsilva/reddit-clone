import React from "react";
import Avatar from "./Avatar";
import Form from "./Form";

function PostBox() {
  return (
    <div className="sticky top-16 z-50">
      <div className="flex space-x-3 my-7 max-w-5xl mx-auto bg-white border border-gray-300 rounded-md p-2">
        {/* @ts-expect-error Server Component */}
        <Avatar />
        <Form />
      </div>
    </div>
  );
}

export default PostBox;

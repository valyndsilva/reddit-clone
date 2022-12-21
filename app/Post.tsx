import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import React from "react";
import Avatar from "./Avatar";
import Time from "./Time";

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  console.log(post.subreddit.topic);

  return (
    <div className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
      {/* Votes */}
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon className="voteButtons hover:text-red-400" />
        <p className="text-xs font-bold text-black">0</p>
        <ArrowDownIcon className="voteButtons hover:text-blue-400" />
      </div>

      <div className="p-3 pb-1">
        {/* Header */}
        <div className="flex items-center space-x-2">
          {/* @ts-expect-error Server Component */}
          <Avatar seed={post.subreddit.topic} />
          <p className="text-xs text-gray-400">
            <span className="font-bold text-black hover:text-blue-400 hover:underline">
              r/{post.subreddit.topic}
            </span>{" "}
            · Posted by u/{post.username} <Time date={post.created_at} />
          </p>
        </div>
        {/* Body */}
        <div className="py-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <h2 className="mt-2 text-sm font-light">{post.body}</h2>
        </div>
        {/* Image */}
        <img src={post.image} alt="" className="w-full" />
        {/* Footer */}
      </div>
    </div>
  );
}

export default Post;

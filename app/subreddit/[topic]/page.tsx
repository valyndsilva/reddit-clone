import React from "react";
import Avatar from "../../Avatar";
import Feed from "../../Feed";
import PostBox from "../../PostBox";

type Props = { params?: { [key: string]: string | string[] | undefined } };

function Subreddit({ params }: Props) {
  // E.g. `/subreddit/nextjs`
  // console.log("URL Params:", params);
  const topic = params!.topic;
  return (
    <div className="h-24 bg-orange-600 p-8">
      {/* <p>{params!.topic}</p> */}
      <div className="-mx-8 mt-10 bg-white dark:bg-gray-700">
        <div className="mx-auto flex max-w-5xl items-center space-x-4 pb-3">
          <div className="-mt-5">
            {/* @ts-expect-error Server Component */}
            <Avatar seed={topic as string} large />
          </div>
          <div className="py-2">
            <h1 className="text-3xl font-semibold">
              Welcome to the r/{topic} subreddit{" "}
            </h1>
            <p className="text-sm text-gray-400">r/{topic}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl pb-10 mt-5">
        <PostBox subreddit={topic as string} />
        <Feed topic={topic as string} />
      </div>
    </div>
  );
}

export default Subreddit;

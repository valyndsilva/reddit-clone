import React from "react";
import Feed from "./Feed";
import PostBox from "./PostBox";
import TopCommunities from "./TopCommunities";
type Props = {};

async function Home({}: Props) {
  return (
    <div className="my-7 mx-auto max-w-5xl">
      <PostBox />
      <div className="flex">
        <Feed />
        <div className="flex-col sticky top-36 mx-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline-flex">
          <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>

          {/* List subreddits */}
          <TopCommunities />
        </div>
      </div>
    </div>
  );
}

export default Home;

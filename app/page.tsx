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
        {/* List subreddits */}
        <TopCommunities />
      </div>
    </div>
  );
}

export default Home;

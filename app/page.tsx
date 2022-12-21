import React from "react";
import Feed from "./Feed";
import PostBox from "./PostBox";
type Props = {};

async function Home({}: Props) {
  return (
    <div>
      <PostBox />
      <div className="flex">
        {/* @ts-expect-error Server Component */}
        <Feed />
      </div>
    </div>
  );
}

export default Home;

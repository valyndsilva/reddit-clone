import React from "react";
import PostBox from "./PostBox";
type Props = {};

async function Home({}: Props) {
  return (
    <div>
      <PostBox />
    </div>
  );
}

export default Home;

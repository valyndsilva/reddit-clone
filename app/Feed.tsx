// import { useQuery } from "@apollo/client";
import React from "react";
import client from "../apollo-client";
import { GET_ALL_POSTS } from "../graphql/queries";
import Post from "./Post";

type Props = {};

async function Feed({}: Props) {
  //   const { data, error } = useQuery(GET_ALL_POSTS);
  const { data, error } = await client.query({
    query: GET_ALL_POSTS,
  });
  console.log(error);
  const posts: Post[] = data?.getPostList;
  return (
    <div className="">
      {posts?.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </div>
  );
}

export default Feed;

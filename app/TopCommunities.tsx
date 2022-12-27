"use client";
import { useQuery } from "@apollo/client";
import React from "react";
import { GET_SUBREDDITS_WITH_LIMIT } from "../graphql/queries";
import SubredditRow from "./SubredditRow";

type Props = {};

function TopCommunities({}: Props) {
  const { data } = useQuery(GET_SUBREDDITS_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  });
  console.log(data);
  const subreddits: Subreddit[] = data?.getSubredditListLimit;
  return (
    <div >
      {subreddits?.map((subreddit, index) => (
        <SubredditRow key={subreddit.id} topic={subreddit.topic} index={index}/>
      ))}
    </div>
  );
}

export default TopCommunities;

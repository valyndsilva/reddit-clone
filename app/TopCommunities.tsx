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
    <div className="flex-col sticky top-36 ml-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white dark:bg-gray-700 lg:inline-flex">
      <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
      <div>
        {subreddits?.map((subreddit, index) => (
          <SubredditRow
            key={subreddit.id}
            topic={subreddit.topic}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default TopCommunities;

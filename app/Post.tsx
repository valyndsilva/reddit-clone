import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  EllipsisHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Time from "./Time";
import { Jelly } from "@uiball/loaders";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { GET_ALL_VOTES_BY_POST_ID } from "../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_VOTE } from "../graphql/mutations";

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  // console.log(post.subreddit.topic);
  // console.log(post);

  const { data: session } = useSession();
  // console.log(session);

  const [vote, setVote] = useState<boolean | undefined>();

  const { data, error } = useQuery(GET_ALL_VOTES_BY_POST_ID, {
    variables: {
      post_id: post?.id,
    },
  });

  // console.log("Data:", data);
  // if (data) {
  //   console.log("Data:", data);
  // } else {
  //   console.log(error);
  // }

  const [addVote] = useMutation(ADD_VOTE, {
    refetchQueries: [GET_ALL_VOTES_BY_POST_ID, "getVotesByPostId"],
  });

  // isUpvote: true (voted Up), false(voted Down), undefined(not voted)
  const upVote = async (isUpvote: boolean) => {
    if (!session) {
      toast("You'll need to sign in to Vote!");
      return;
    }
    // If you already voted and you are trying to upvote return null
    if (vote && isUpvote) return;
    // If you have not voted and you are trying to upvote or downvote multiple times return null
    if (vote === false && !isUpvote) return;

    console.log("Voting...", isUpvote);

    const {
      data: { insertVote: newVote },
    } = await addVote({
      variables: {
        username: session.user?.name,
        post_id: post.id,
        created_at: new Date(),
        upvote: isUpvote,
      },
    });
    console.log("Voted successfully", data);
  };

  const displayVotes = (data: any) => {
    const votes: Vote[] = data?.getVotesByPostId;
    const displayNumber = votes?.reduce(
      (total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
      0
    );
    if (votes?.length === 0) return 0;
    if (displayNumber === 0) {
      return votes[0]?.upvote ? 1 : -1;
    }
    return displayNumber;
  };

  useEffect(() => {
    const votes: Vote[] = data?.getVotesByPostId;
    // console.log("Votes:", votes);

    // Latest vote (As we sorted by newly created first in SQL query with ORDER BY "created_at"  DESC)
    // Note: You could improve this by moving it to the original Query
    const vote = votes?.find(
      (vote) => vote.username === session?.user?.name
    )?.upvote;
    // console.log("isUpvote:", vote);

    setVote(vote);
  }, [data]);

  if (!post)
    return (
      <div className="flex w-full items-center p-10 justify-center text-xl">
        <Jelly size={50} color="#FF4501" />
      </div>
    );

  return (
    <div className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
      {/* Votes */}
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon
          onClick={() => upVote(true)}
          className={`voteButtons hover:text-blue-400 ${
            vote && "text-blue-400"
          }`}
        />
        <p className="text-xs font-bold text-black">{displayVotes(data)}</p>
        <ArrowDownIcon
          onClick={() => upVote(false)}
          className={`voteButtons hover:text-red-400  ${
            vote === false && "text-red-400"
          }`}
        />
      </div>

      <div className="p-3 pb-1">
        {/* Header */}
        <div className="flex items-center space-x-2">
          {/* @ts-expect-error Server Component
          <Avatar seed={post.subreddit.topic} /> */}
          <Image
            src={`https://avatars.dicebear.com/api/open-peeps/${
              post.subreddit.topic || post.username || "placeholder"
            }.svg`}
            alt="Avatar Image"
            width={50}
            height={50}
            className={`rounded-full border-gray-300 bg-white h-10 w-10`}
          />
          <p className="text-xs text-gray-400">
            <Link href={`/subreddit/${post.subreddit.topic}`}>
              <span className="font-bold text-black hover:text-blue-400 hover:underline">
                r/{post.subreddit.topic}
              </span>{" "}
            </Link>
            · Posted by u/{post.username} <Time date={post.created_at} />
          </p>
        </div>

        {/* Body */}
        <div className="py-4">
          <Link href={`/post/${post.id}`}>
            {" "}
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </Link>
          <h2 className="mt-2 text-sm font-light">{post.body}</h2>
        </div>

        {/* Image */}
        <img src={post.image} alt="" className="w-full" />

        {/* Footer */}
        <div className="flex space-x-4 text-gray-400">
          <div className="postButtons">
            <ChatBubbleBottomCenterIcon className="h-6 w-6" />
            <p className="">{post.comment.length} Comments</p>
          </div>
          <div className="postButtons">
            <GiftIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Award</p>
          </div>
          <div className="postButtons">
            <ShareIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Share</p>
          </div>
          <div className="postButtons">
            <BookmarkIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Save</p>
          </div>
          <div className="postButtons">
            <EllipsisHorizontalIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

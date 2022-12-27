"use client";
import { useMutation, useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ADD_COMMENT } from "../../../graphql/mutations";
import { GET_POST_BY_POST_ID } from "../../../graphql/queries";
// import Avatar from "../../Avatar";
import Post from "../../Post";
import Time from "../../Time";

type Props = { params?: { [key: string]: string | string[] | undefined } };

type FormData = {
  comment: string;
};

function page({ params }: Props) {
  //   console.log("postID URL Params:", params);

  const { data: session } = useSession();

  // While doing pre-fecth post is undefined
  const { data, error } = useQuery(GET_POST_BY_POST_ID, {
    variables: { post_id: params!.postId },
  });

  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_POST_BY_POST_ID, "getPostListByPostId"],
  });

//   if (data) {
//     console.log("Data:", data);
//   } else {
//     console.log(error);
//   }

  // const posts: Post[] = data?.getPostList;
  const post: Post = data?.getPostListByPostId;
  //   console.log("Post:", post);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  //   Alternative way to submit form using react hook (Form.tsx way recommended)
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // post comment here...
    console.log(data);

    const notification = toast.loading("Posting your comment...");
    await addComment({
      variables: {
        post_id: params!.postId,
        username: session?.user?.name,
        text: data.comment,
      },
    });

    setValue("comment", "");

    toast.success("Comment posted successfully!", {
      id: notification,
    });
    // console.log("Form data:", data);
  };

  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />
      {post && (
        <>
          <div className="-mt-1 rounded-b-md border-t-0 border-gray-300 bg-white dark:bg-gray-700 p-5 pl-16">
            <p className="text-sm">
              {" "}
              Comment as{" "}
              <span className="text-red-500">{session?.user?.name}</span>
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-2"
            >
              <textarea
                {...register("comment")}
                disabled={!session}
                className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50 dark:bg-blue-50 dark:text-gray-800"
                placeholder={
                  session
                    ? "What are your thoughts?"
                    : "Please sign in to comment"
                }
              />
              <button
                disabled={!session}
                type="submit"
                className="rounded-full bg-red-500 p-3 font-semibold text-white dark:text-gray-800 disabled:bg-gray-200"
              >
                Comment
              </button>
            </form>
          </div>

          <div className="-my-5 rounded-b-md border-t-0 border-gray-300 bg-white dark:bg-gray-700 py-5 px-10">
            <hr className="py-2" />
            {post?.comment.map((comment) => (
              <div
                key={comment.id}
                className="relative flex items-center space-x-2 space-y-5"
              >
                <hr className="absolute top-10 h-14 border left-7 z-0 " />
                <div className="z-50">
                  {/* @ts-expect-error Server Component
              <Avatar seed={comment.username} /> */}
                  <Image
                    src={`https://avatars.dicebear.com/api/open-peeps/${
                      comment.username || "placeholder"
                    }.svg`}
                    alt="Avatar Image"
                    width={50}
                    height={50}
                    className={`rounded-full border-gray-300 bg-white h-10 w-10`}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="py-2 text-xs text-gray-400">
                    <span className="font-semibold text-gray-400">
                      {comment.username}
                    </span>{" "}
                    · <Time date={comment.created_at} />
                  </p>
                  <p>{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default page;

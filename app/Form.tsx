"use client";
import React, { useState } from "react";
import { PhotoIcon, LinkIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { Context, useMutation } from "@apollo/client";
import { ADD_POST, ADD_SUBREDDIT } from "../graphql/mutations";
import client from "../apollo-client";
import {
  GET_SUBREDDIT_BY_TOPIC,
} from "../graphql/queries";
import toast from "react-hot-toast";

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

function Form() {
  const { data: session } = useSession();
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);

  const [addPost] = useMutation(ADD_POST);
  const [addSubreddit] = useMutation(ADD_SUBREDDIT);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  console.log(watch("postTitle")); // watch input value by passing the name of it

  const onSubmit = handleSubmit(async (formData) => {
    console.log(formData);
    const notification = toast.loading("Creating a new post...");

    try {
      // Query for the subreddit topic
      const {
        data: { getSubredditListByTopic },
      } = await client.query({
        query: GET_SUBREDDIT_BY_TOPIC,
        variables: {
          topic: formData.subreddit,
        },
      });

      // Check if subreddit exists
      const subredditExists = getSubredditListByTopic.length > 0;
      if (!subredditExists) {
        // Create a subreddit
        console.log("Subreddit is new! -> Creating a new Subreddit!");

        const {
          data: { insertSubreddit: newSubreddit },
        } = await addSubreddit({
          variables: { topic: formData.subreddit },
        });
        console.log("Creating a post...", formData);
        // To avoid a bug if postImage is undefined cast to empty string to fix bug
        const image = formData.postImage || "";

        const {
          data: { insertPost: newPost },
        } = await addPost({
          variables: {
            body: formData.postBody,
            image: image,
            subreddit_id: newSubreddit.id,
            title: formData.postTitle,
            username: session?.user?.name,
          },
        });

        console.log("New post added:", newPost);
      } else {
        //use existing subreddit
        console.log("Using existing subreddit!");
        console.log(getSubredditListByTopic);
        const image = formData.postImage || "";

        const {
          data: { insertPost: newPost },
        } = await addPost({
          variables: {
            body: formData.postBody,
            image: image,
            subreddit_id: getSubredditListByTopic[0].id,
            title: formData.postTitle,
            username: session?.user?.name,
          },
        });
        console.log("New post added:", newPost);
      }
      //After post had been added!
      setValue("postTitle", "");
      setValue("postBody", "");
      setValue("postImage", "");
      setValue("subreddit", "");
      toast.success("New Post Created!", { id: notification });
    } catch (error) {
      toast.error("Whopps something went wrong!", { id: notification });
      console.log(error);
    }
  });
  return (
    <form onSubmit={onSubmit} className="flex flex-col flex-1">
      <div className="flex flex-1 space-x-3  items-center ">
        <input
          {...register("postTitle", { required: true })}
          disabled={!session}
          type="text"
          placeholder={
            session ? "Create a post by entering a title" : "Sign in to post"
          }
          className="flex-1 rounded-md bg-gray50 p-2 pl-5 outline-none"
        />
        <PhotoIcon
          className={`h-6 w-6 text-gray-300 cursor-pointer ${
            imageBoxOpen && "text-blue-300"
          }`}
          onClick={() => setImageBoxOpen(!imageBoxOpen)}
        />
        <LinkIcon className={`h-6 w-6 text-gray-300 cursor-pointer`} />
      </div>
      {/* if postTitle active set to true */}
      {!!watch("postTitle") && (
        <div className="flex flex-col py-2">
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body:</p>
            <input
              className="flex-1 m-2 bg-blue-50  p-2 outline-none"
              {...register("postBody")}
              type="text"
              placeholder="Text (optional)"
            />
          </div>
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subreddit:</p>
            <input
              className=" m-2 flex-1 bg-blue-50  p-2 outline-none"
              {...register("subreddit", { required: true })}
              type="text"
              placeholder="i.e nextjs"
            />
          </div>

          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Image URL:</p>
              <input
                className=" m-2 flex-1 bg-blue-50  p-2 outline-none"
                {...register("postImage")}
                type="text"
                placeholder="Optional..."
              />
            </div>
          )}
          {/* Errors */}
          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === "required" && (
                <p>A post title is required.</p>
              )}
              {errors.subreddit?.type === "required" && (
                <p>A subreddit is required.</p>
              )}
            </div>
          )}

          {!!watch("postTitle") && (
            <button
              type="submit"
              className="w-full rounded-full bg-blue-400 p-2 text-white"
            >
              Create Post
            </button>
          )}
        </div>
      )}
    </form>
  );
}

export default Form;

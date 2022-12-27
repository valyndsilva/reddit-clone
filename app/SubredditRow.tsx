import { ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";

type Props = {
  topic: string;
  index: number;
};

function SubredditRow({ index, topic }: Props) {
  return (
    <div className="flex items-center space-x-2 border-t bg-white dark:bg-gray-700 px-4 py-2 last:rounded-b">
      <p>{index + 1}</p>
      <ChevronUpIcon className="h-4 w-4 flex-shrink-0 text-green-400" />
      {/* @ts-expect-error Server Component 
       <Avatar seed={`/subreddit/${topic}`} /> */}
      <Image
        src={`https://avatars.dicebear.com/api/open-peeps/${
          topic || "placeholder"
        }.svg`}
        alt="Avatar Image"
        width={50}
        height={50}
        className={`rounded-full border-gray-300 bg-white h-10 w-10`}
      />
      <p className="flex-1 truncate">r/{topic}</p>
      <Link href={`/subreddit/${topic}`}>
        <div className="cursor-pointer rounded-full bg-blue-500 px-3 text-white">
          View
        </div>
      </Link>
    </div>
  );
}

export default SubredditRow;

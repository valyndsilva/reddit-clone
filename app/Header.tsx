import Image from "next/image";
import React from "react";
import {
  HomeIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  VideoCameraIcon,
  GlobeEuropeAfricaIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  PlusIcon,
  MegaphoneIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "./Dropdown";
import { unstable_getServerSession } from "next-auth/next";
import LoginBtn from "./LoginBtn";

type Props = {};

export default async function Header({}: Props) {
  // const loggedIn = false;
  const session = await unstable_getServerSession();
  console.log(session);
  console.log("Header here!");

  return (
    <>
      <div className="sticky top-0 z-50 flex bg-white px-4 py-2">
        <div className="relative hidden lg:inline-flex flex-shrink-0 cursor-pointer">
          <Image
            src="/logo.png"
            alt="reddit logo"
            width={96}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="relative flex lg:hidden items-center flex-shrink-0 cursor-pointer">
          <Image
            src="/reddit-icon.png"
            alt="reddit logo"
            className="object-contain"
            width={32}
            height={32}
          />
        </div>
        <div className="mx-7 flex items-center xl:min-w-[300px]">
          <HomeIcon className="h-5 w-5" />
          <p className="flex-1 ml-2 hidden lg:inline-flex">Home</p>
          <ChevronDownIcon className="h-5 w-4 ml-1 " />
        </div>
        <form className="flex flex-1 items-center space-x-2 rounded-full border border-gray-200 bg-gray-100 focus:bg-white px-3 py-1 mr-2">
          <MagnifyingGlassIcon className="h-5 w-h-6 w-6 text-gray-400" />
          <input
            className="flex-1 bg-transparent outline-none"
            type="text"
            placeholder="Search Reddit"
          />
          <button type="submit" hidden />
        </form>

        {/* {loggedIn ? ( */}
        {session ? (
          <div>
            <div className="flex items-center space-x-2 text-gray-800">
              <div className=" hidden items-center space-x-2 md:inline-flex">
                <ArrowTopRightOnSquareIcon className="icon" />
                <VideoCameraIcon className="icon" />
                <GlobeEuropeAfricaIcon className="icon" />
                <ChatBubbleOvalLeftEllipsisIcon className="icon" />
                <BellIcon className="icon" />
                <PlusIcon className="icon" />
                <button className="bg-gray-100 rounded-full items-center py-1 px-2 hidden lg:inline-flex">
                  <MegaphoneIcon className="icon" />{" "}
                  <span className="text-sm">Advertise</span>
                </button>
              </div>

              <div className="ml-5 flex items-center">
                <Dropdown />
              </div>
            </div>
          </div>
        ) : (
          <div className="cursor-pointer items-center space-x-2 border-border-gray-100 flex ">
            {/* <p className="bg-reddit text-white text-sm rounded-full py-2 px-3 hidden md:inline-flex">
            Log In
          </p> */}
            <LoginBtn />
            <Dropdown />
          </div>
        )}
      </div>
    </>
  );
}

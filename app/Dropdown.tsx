"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  MegaphoneIcon,
  MoonIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import DarkModeButton from "./DarkModeButton";
import { useSession, signIn, signOut } from "next-auth/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
  // const loggedIn = true;
  const { data: session } = useSession();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {/* {loggedIn ? ( */}
        {session ? (
          <Menu.Button className="inline-flex w-full space-x-4 items-center justify-center rounded-md border hover:border-gray-300 hover:shadow-sm hover:bg-gray-50 bg-white px-4 py-2 text-sm font-medium text-gray-700   ">
            <div className="relative flex-shrink-0 ">
              <Image
                src="/reddit-black-icon.png"
                alt="logo"
                className="object-contain"
                width={20}
                height={20}
              />
            </div>
            <div className="flex-1 text-xs text-left ">
              <p className="truncate">
                {session.user?.name}
              </p>
              <p className="text-gray-400">1 Karma</p>
            </div>
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        ) : (
          <Menu.Button className="inline-flex w-full justify-center rounded-md border hover:border-gray-300 hover:shadow-sm hover:bg-gray-50 bg-white px-4 py-2 text-sm font-medium text-gray-700   ">
            <div className="relative flex-shrink-0 ">
              <Image
                src="/reddit-black-icon.png"
                alt="logo"
                className="object-contain"
                width={20}
                height={20}
              />
            </div>
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        )}
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
          <div className="py-1">
            {/* {loggedIn ? ( */}
            {session ? (
              <>
                {" "}
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-redditBlue text-white" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center"
                      )}
                    >
                      {/* <MoonIcon className="w-5 h-5" />{" "}
                      <span className=" pl-2">Dark Mode</span> */}
                      <DarkModeButton />
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-redditBlue text-white" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center"
                      )}
                    >
                      <SparklesIcon className="w-5 h-5" />{" "}
                      <span className=" pl-2">Premium</span>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-redditBlue text-white" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center"
                      )}
                    >
                      <UserGroupIcon className="w-5 h-5" />{" "}
                      <span className=" pl-2">Create a Community</span>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-redditBlue text-white" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center lg:hidden"
                      )}
                    >
                      <MegaphoneIcon className="w-5 h-5" />{" "}
                      <span className=" pl-2">Advertise on Reddit</span>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-redditBlue text-white" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center"
                      )}
                    >
                      <QuestionMarkCircleIcon className="w-5 h-5" />{" "}
                      <span className=" pl-2">Help Center</span>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-redditBlue text-white" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center"
                      )}
                    >
                      <InformationCircleIcon className="w-5 h-5" />{" "}
                      <span className=" pl-2">More</span>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-redditBlue text-white" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center"
                      )}
                    >
                      <DocumentTextIcon className="w-5 h-5" />{" "}
                      <span className=" pl-2">Terms & Policies</span>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-redditBlue text-white" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center"
                      )}
                    >
                      <MegaphoneIcon className="w-5 h-5" />{" "}
                      <span className=" pl-2">Advertise on Reddit</span>
                    </a>
                  )}
                </Menu.Item>
              </>
            ) : (
              <>
                {" "}
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-redditBlue text-white" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center"
                      )}
                    >
                      {/* <MoonIcon className="w-5 h-5" />
                      <span className=" pl-2">Dark Mode</span> */}
                      <DarkModeButton />
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-redditBlue text-white" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center"
                      )}
                    >
                      <QuestionMarkCircleIcon className="w-5 h-5" />{" "}
                      <span className=" pl-2">Help Center</span>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-redditBlue text-white" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center"
                      )}
                    >
                      <InformationCircleIcon className="w-5 h-5" />{" "}
                      <span className=" pl-2">More</span>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-redditBlue text-white" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center"
                      )}
                    >
                      <DocumentTextIcon className="w-5 h-5" />{" "}
                      <span className=" pl-2">Terms & Policies</span>
                    </a>
                  )}
                </Menu.Item>
              </>
            )}
            <div className="py-1 border-t border-[1px] border-gray-100">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-redditBlue text-white" : "text-gray-700",
                      "px-4 py-2 text-sm flex items-center"
                    )}
                  >
                    {" "}
                    {session ? (
                      <div onClick={() => signOut()} className="flex">
                        <ArrowRightOnRectangleIcon className="w-5 h-5" />
                        <span className=" pl-2">Logout</span>
                      </div>
                    ) : (
                      <div onClick={() => signIn()} className="flex">
                        <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                        <span className=" pl-2">Login / Sign Up</span>
                      </div>
                    )}
                  </a>
                )}
              </Menu.Item>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

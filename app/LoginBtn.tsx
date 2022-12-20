"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {};

function LoginBtn({}: Props) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button
          onClick={() => signOut()}
          className="bg-reddit text-white text-sm rounded-full py-2 px-3 hidden md:inline-flex"
        >
          Sign Out
        </button>
      </>
    );
  }
  return (
    <>
      <button
        onClick={() => signIn()}
        className="bg-reddit text-white text-sm rounded-full py-2 px-3 hidden md:inline-flex"
      >
        Log In
      </button>
    </>
  );
}

export default LoginBtn;

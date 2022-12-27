"use client";
import React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
type Props = {};

function DarkModeButton({}: Props) {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div className="flex" onClick={() => setTheme("light")}>
          {" "}
          <SunIcon className="h-6 w-6 cursor-pointer dark:text-white" />
          <span className=" pl-2">Light Mode</span>
        </div>
      );
    } else {
      return (
        <div className="flex" onClick={() => setTheme("dark")}>
          <MoonIcon className="h-5 w-5 cursor-pointer  dark:text-white" />
          <span className=" pl-2">Dark Mode</span>
        </div>
      );
    }
  };

  return <div>{renderThemeChanger()}</div>;
}

export default DarkModeButton;

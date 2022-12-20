# Latest News App ⚡

## Setting up NextJS and TailwindCSS:

```
npx create-next-app -e with-tailwindcss reddit-clone
cd reddit-clone
npm install @heroicons/react encoding
npm run dev
```

## Convert NextJS 12 to NextJS 13:

Create a "app" folder in the root.

### In next.config.js:

```
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};
```

Restart Server.

### In app/page.tsx:

```
import React from "react";

type Props = {};

function Home({}: Props) {
  return <div>Home</div>;
}

export default Home;
```

### You receive an error:

```
error - Conflicting app and page file was found, please remove the conflicting files to continue:
error -   "pages/index.tsx" - "app/page.tsx"

```

### Delete pages/index.tsx file.

Now the app/page.tsx file is the main root file. a layout.tsx and head.tsx file is auto-generated in app folder.

## Update Tailwind CSS import:

Remove the import from pages/\_app.tsx

```
import '../styles/globals.css'
```

Add the import in app/layout.tsx:

```
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
```

In app/head.tsx:

```
export default function Head() {
  return (
    <>
      <title>Reddit 2.0 Clone</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
```

## Building Header Component:

### Update tailwind.config.js to include a custom color:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reddit: "#F54505",
      },
    },
  },
  plugins: [],
};

```

### In styles/globals.css:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .icon {
    @apply h-9 w-6 lg:w-9 cursor-pointer rounded-sm lg:p-1 lg:hover:bg-gray-100;
  }
}

```

### Create app/Header.tsx:

```
import React from "react";

type Props = {};

function Header({}: Props) {
  return <div>Header</div>;
}

export default Header;

```

### Update app/layout.tsx to include Header:

```
import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header/>
        {children}</body>
    </html>
  );
}
```

### Install [Headless UI](https://headlessui.com/react/menu) for Menu (Dropdown):

```
npm install @headlessui/react
```

### Create app/Dropdown.tsx:

```
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const loggedIn = false;
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
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
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
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
            {loggedIn ? (
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
                      <MoonIcon className="w-5 h-5" />{" "}
                      <span className=" pl-2">Dark Mode</span>
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
                        <ArrowRightOnRectangleIcon className="w-5 h-5" />{" "}
                        <span className=" pl-2">Logout</span>
                      </a>
                    )}
                  </Menu.Item>
                </div>
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
                      <MoonIcon className="w-5 h-5" />{" "}
                      <span className=" pl-2">Dark Mode</span>
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
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-redditBlue text-white" : "text-gray-700",
                          "px-4 py-2 text-sm flex items-center"
                        )}
                      >
                        <ArrowLeftOnRectangleIcon className="w-5 h-5" />{" "}
                        <span className=" pl-2">Login / Sign Up</span>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

```

### Update app/Header.tsx:

```
import Image from "next/image";
import React from "react";
import {
  HomeIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  SparklesIcon,
  VideoCameraIcon,
  GlobeEuropeAfricaIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  PlusIcon,
  MegaphoneIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "./Dropdown";

type Props = {};

function Header({}: Props) {
  const loggedIn = false;
  return (
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

      {loggedIn ? (
        <>
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
        </>
      ) : (
        <div className="cursor-pointer items-center space-x-2 border-border-gray-100 flex ">
          <p className="bg-reddit text-white text-sm rounded-full py-2 px-3 hidden md:inline-flex">
            Log In
          </p>

          <Dropdown />
        </div>
      )}
    </div>
  );
}

export default Header;

```

## Implementing [NextAuth](https://next-auth.js.org/getting-started/example) and Dark Mode:

```
npm install next-auth
```

### Add API Route:

Refer this [doc](https://next-auth.js.org/getting-started/example).
[Reddit Provider](https://next-auth.js.org/providers/reddit)

#### In pages/api/auth/[...nextauth].js:

```
import NextAuth from "next-auth";
import RedditProvider from "next-auth/providers/reddit";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      // This Provider template only has a one hour access token to it and only has the "identity" scope. If you want to get a refresh token as well you must follow this:
      authorization: {
        params: {
          duration: "permanent",
        },
      },
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);

```

#### Get Reddit Developer Credentials:

Got to [Reddit API Documentation](https://www.reddit.com/dev/api)
Create App: [click here](https://www.reddit.com/prefs/apps) > Create an App >
Name: nextauth-access
Type: web app
description: Reddit clone for test purposes
redirect uri: http://localhost:3000/api/auth/callback/reddit
Create App

Copy Client ID and Client Secret

#### Create a .env.local file:

Paste the Client ID and Secret in the env file.

```
REDDIT_CLIENT_ID=...
REDDIT_CLIENT_SECRET=...
```

### Add Providers Component:

#### Create app/Providers.tsx:

Providers.tsx will be a Client-side rendered component and this is where you would use Redux and other Providers ideally.

<b>Note: A Server component passed in a Client component becomes a "Client component". To pass a Server component in a Client Component as still a "Server Component" you need to pass the Server component using {children}. The {children} in Providers.tsx will be Server-side rendered components. This is an example of how to render Server components inside the Client component.</b>

In app/Providers.tsx:

```
"use client";
import React from "react";

function Providers({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default Providers;

```

#### Update app/layout.tsx:

You might get an error for <Header/> component :

```
'Header' cannot be used as a JSX component.
  Its return type 'Promise<Element>' is not a valid JSX element.
    Type 'Promise<Element>' is missing the following properties from type 'ReactElement<any, any>': type, props, key
```

This is fixed for now with {/_ @ts-expect-error Server Component _/} till a permanent fix is put in place by typescript.1px

In app/layout.tsx:

```
import "../styles/globals.css";
import Header from "./Header";
import Providers from "./Providers";
import Test from "./Test";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Header />
          <Test />
          {children}
        </Providers>
      </body>
    </html>
  );
}

```

#### Install [Next Themes](https://www.npmjs.com/package/next-themes):

```
npm install next-themes
```

#### Update app/Providers.tsx with next-themes ThemeProvider and Next-Auth SessionProvider:

```
"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";

function Providers({ children }: { children: React.ReactNode }) {
  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  // `session` will match the returned value of `callbacks.session()` from `NextAuth()`
  const { data: session } = useSession();
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}

export default Providers;


```

### Update tailwind.config.js with darkMode:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reddit: "#F54505",
        redditBlue: "#2A79D3",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

```

### Add Dark Mode Button:

Create app/DarkModeButton.tsx:

```
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
          <SunIcon className="h-6 w-6 cursor-pointer " />
          <span className=" pl-2">Light Mode</span>
        </div>
      );
    } else {
      return (
        <div className="flex" onClick={() => setTheme("dark")}>
          <MoonIcon className="h-5 w-5 cursor-pointer text-[#2a2a2a]" />
          <span className=" pl-2">Dark Mode</span>
        </div>
      );
    }
  };

  return <div>{renderThemeChanger()}</div>;
}

export default DarkModeButton;


```

### Update app/Dropdown.tsx with DarkModeButton:

```
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
  const loggedIn = true;
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {loggedIn ? (
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
            <div className="flex-1 text-xs text-left">
              <p className="truncate">Username</p>
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
            {loggedIn ? (
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
                    {loggedIn ? (
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


```

## Frontend - API Route (React Hook for Next-auth):

### Create a test component LoginBtn.tsx to test Next-Auth:

The useSession() React Hook in the NextAuth.js client is the easiest way to check if someone is signed in. You can use the useSession hook from anywhere in your application (e.g. in a header component).

In app/LoginBtn.tsx:

```
"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {};

function LoginBtn({}: Props) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user!.email}
        <pre>{JSON.stringify(session.user, null, 2)}</pre>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }
  return (
    <>
      Not signed in
      <br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

export default LoginBtn;

```

### Add LoginBtn to app/page.tsx:

```
import React from "react";
import LoginBtn from "./LoginBtn";

type Props = {};

async function Home({}: Props) {

  return (
    <div>
      <h1>Auth Testing</h1>
      <div>
        <LoginBtn />
      </div>
    </div>
  );
}

export default Home;

```

You should be able to login, see user info and logout.

## Backend - API Route

### Create NEXT_AUTH Secret:

Not providing any secret or NEXTAUTH_SECRET will throw an error in production.
Refer this [doc](https://next-auth.js.org/configuration/options#secret)

```
openssl rand -base64 32
```

Copy the secret and paste in .env.local.

#### Update .env.local:

Add NEXTAUTH_URL and NEXTAUTH_SECRET.

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=...
REDDIT_CLIENT_ID=...
REDDIT_CLIENT_SECRET=...
```

#### Update pages/api/auth/[...nextauth].js:

```
import NextAuth from "next-auth";
import RedditProvider from "next-auth/providers/reddit";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      // This Provider template only has a one hour access token to it and only has the "identity" scope. If you want to get a refresh token as well you must follow this:
      authorization: {
        params: {
          duration: "permanent",
        },
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);

```

### How to use user session data in Server components:

You can use the user session data in Server components using the unstable_getServerSession() mehtod.

Ex: In app/page.tsx:

```
import React from "react";
import LoginBtn from "./LoginBtn";
import { unstable_getServerSession } from "next-auth/next";
type Props = {};

async function Home({}: Props) {
  const session = await unstable_getServerSession();

  return (
    <div>
      <h1>Auth Testing</h1>
      <div>
        <LoginBtn />
        {session && <div>You are {session.user!.name}</div>}
      </div>
    </div>
  );
}

export default Home;

```

## Update Header Component:

### In appp/Header.tsx:

```
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

```

### Update Dropdown.tsx:

In app/Dropdown.tsx:

```
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
            <div className="flex-1 text-xs text-left">
              <p className="truncate">{session.user?.name}</p>
              <p className="text-gray-400 flex">1 Karma</p>
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

```

### Update app/layout.tsx:

```
import "../styles/globals.css";
import Header from "./Header";
import Providers from "./Providers";
import Test from "./Test";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="h-screen overflow-y-scroll bg-slate-200">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

## Setup PostgreSQL Database in Supabase:

Supabase is a Firebase alternative. We need to 1st create a PostgreSQL db before we create a schema with stepzen so that the front end can communicate with the back end.

Go to [Supabase](https://supabase.com/) > Start your project > Login with Github > Create New
Project
Organiazation: default
Name: reddit-clone
Database Password: #7MdmfWmKzZNT55
Region: East US (North Viginia)
Pricing plan: Free
Create New Project

Copy the Project API Keys

We need to create 4 tables in the SQL database:

- Post
- Subreddit
- Vote
- Comment

### Relational Database:

A relational database is a collection of data items with pre-defined relationships between them. These items are organized as a set of tables with columns and rows. Tables are used to hold information about the objects to be represented in the database.

Each column in a table holds a certain kind of data and a field stores the actual value of an attribute. The rows in the table represent a collection of related values of one object or entity.

Each row in a table could be marked with a unique identifier called a "primary key", and rows among multiple tables can be made related using foreign keys. This data can be accessed in many different ways without reorganizing the database tables themselves.

We can define a schema in GraphQL using StepZen and write instructions to get the required info.

### Creating Tables in Supabase:

#### Create a post table:

Supabase > Table Editor > Create a new table
Name:post
Description: Post table
Disabled "Enable Row Level Security (RLS)
Columns:

1. Name:id Type:int8 Default value: Null Primary
2. Name:created_at Type:timestamptz Default value: now()
3. Name:title Type:text Default value: Null
4. Name:body Type:text Default value: Null
5. Name:image Type:text Default value: Null
6. Name:username Type:varchar Default value: Null

Save

#### Create a subreddit table:

Supabase > Table Editor > Create a new table
Name:subreddit
Description: Subreddit Table
Disabled "Enable Row Level Security (RLS)
Columns:

1. Name:id Type:int8 Default value: Null Primary
2. Name:created_at Type:timestamptz Default value: now()
3. Name:topic Type:text Default value: Null
   Save

#### Add Foreign Key to post table.

##### What are foreign keys?

Foreign keys help maintain referential integrity of your data by ensuring that no one can insert rows into the table that do not have a matching entry to another table.
Ex: If we have a post with 15 comments we cannot delete the post. First we have to delete the comments associated to that post and then delete the post.

We create a relationship between the 2 tables by adding a foreign key in "post" table.
Click on "post" table > Edit > Add a new row

3. Name:subreddit_id Link icon Type:--- Default value: Null
   Click on the Link icon >
   Select a table to reference to: subreddit
   Select a column from subreddit to reference to: id
   Save
   Save

#### Create a comment table:

Supabase > Table Editor > Create a new table
Name:subreddit
Description: Subreddit Table
Disabled "Enable Row Level Security (RLS)
Columns:

1. Name:id Type:int8 Default value: Null Primary
2. Name:created_at Type:timestamptz Default value: now()
3. Name:text Type:text Default value: Null
4. Name:username Type:varchar Default value: Null
5. Name:post_id Link icon Type:--- Default value: Null
   Click on the Link icon >
   Select a table to reference to: post
   Select a column from post to reference to: id
   Save
   Save

#### Create an upvote table:

Supabase > Table Editor > Create a new table
Name:vote
Description: Subreddit Table
Disabled "Enable Row Level Security (RLS)
Columns:

1. Name:id Type:int8 Default value: Null Primary
2. Name:created_at Type:timestamptz Default value: now()
3. Name:post_id Link icon Type:--- Default value: Null
   Click on the Link icon >
   Select a table to reference to: post
   Select a column from post to reference to: id
   Save
   Save
4. Name:upvote Type:bool Default value: Null
5. Name:username Type:varchar Default value: Null
   Save

#### Get Database Settings from Supabase:

We need to get the database settings to use while creating the GraphQL Schema.
Go to the Sidebar > Settings > Database > Connection Info
Copy the Host, Database name, Port, User, Password.

## Setup and Implement StepZen:

### Build GraphQL API:

Refer this [doc](https://stepzen.com/getting-started). Copy the account name, api key and admin key to use later.

Install dependencies:

```
sudo npm install -g stepzen
stepzen login
What is your account name? accountname
What is your admin key? adminkey
```

### Add Key to .env.local:

Add the Stepzen API key in .env.local:

```
STEPZEN_API_KEY=...
```

### Create folder stepzen in root:

```
cd stepzen
stepzen init
? What would you like your endpoint to be called? api/reddit-clone
```

### Create GraphQL Schema:

Here you will need the database settings you saved previously from Supabase Settings.

```
cd stepzen (Make sure you are in stepzen folder you created earlier)
stepzen import postgresql
What is your host? ...
? What is your database name? ...
? What is the username? ...
? What is the password? [hidden]
? Automatically link types based on foreign key relationships using @materializer)? Yes
? What is your database schema (leave blank to use defaults)? enter
Successfully imported schema postgresql from StepZen...

```

In stepzen folder it autogenerates the graphql types.

```
GraphQL types are DIFFERENT from TypeScript types.
```

When we use GraphQL schemas we need to create queries and mutations. This is autogenerated for us with the command "stepzen import postgresql"

Queries are used when you need to pull information from your data source. You can use graphql to pull from the db, rest api etc and return all in 1 request.
Mutations are used when you want to insert or delete information.

### Add an endpoint:

In stepzen folder:

```
stepzen start
```

This deploys api/reddit-clone to a cloud-based endpoint on stepzen.
Explore it with GraphiQL at http://localhost:5001/api/reddit-clone
Explorer
To see your queries and mutations: Type in editor:
mutation abc{ Ctrl+Spacebar to see the options and choose insertPost } OR
query abc{ Ctrl+Spacebar to see the options }

When we use REST API we end up overfetching. With GraphQL we can declare which fields we need to fetch.

StepZen Explorer: getPostList > select all fields > Play
You get empty fields as there are no posts.

### Create Test Data

#### Create subreddit:

Go to supabase > subreddit table > Insert row
id:leave blank as it will be autogenerated
created_at: auto populated
topic:nextjs
Save

Keep note of the id once created. In this case id:1

#### Create post:

Go to supabase > subreddit table > Insert row
id:leave blank as it will be autogenerated
created_at: auto populated
title:Is NextJS worth learning?
body: lorum ipsum text
image:
username: test
sudbreddit_id: 1 (id you noted earlier)
Save

Keep note of the id once created

#### Test StepZen query:

StepZen Explorer: getPostList > select all fields > Play
You get the post that was created in supabase.

## Setup and Implement Apollo Client:

Apollo Client let's you use a GraphQL endpoint from the front end.

Refer this [doc](https://www.apollographql.com/docs/react/get-started)

### Install dependencies:

Open a new terminal in root directory:

```
cd ..
npm install @apollo/client graphql
```

### Initialize ApolloClient:

Copy the Stepzen API URL generated using "stepzen start" in the terminal. Also go to https://dashboard.stepzen.com/account and copy your STEPZEN_API_KEY. Add it to the .env.local file

```
STEPZEN_API_URL=...
STEPZEN_API_KEY=...
```

In the root create apollo-client.js:
If you get an error 401 unauthorized while submitting the form use the STEPZEN_API_KEY and STEPZEN_API_URL directly instead of using the .env.local file.

```
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const headers = {
  Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
};

const client = new ApolloClient({
  uri: process.env.STEPZEN_API_URL,
  headers,
  cache: new InMemoryCache(),
});

export default client;
```

Restart Server.

### Connect Apollo Client to React Frontend:

You need to Add ApolloProvider to your application.

In app/Providers.tsx:

```
"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client"
function Providers({ children }: { children: React.ReactNode }) {
  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  // `session` will match the returned value of `callbacks.session()` from `NextAuth()`
//   const { data: session } = useSession();
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ApolloProvider client={client}>
        <SessionProvider>{children}</SessionProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default Providers;

```

### Fetch data with useQuery:

After your ApolloProvider is hooked up, you can start requesting data with useQuery. The useQuery hook is a React hook that shares GraphQL data with your UI.
We can define the query we want to execute by wrapping it in the gql template literal.

## Build PostBox Component:

### In app/PostBox.tsx:

```
import React from "react";

type Props = {};

function PostBox({}: Props) {
  return <div>PostBox</div>;
}

export default PostBox;

```

### In app/page.tsx:

```
import React from "react";
import PostBox from "./PostBox";
type Props = {};

async function Home({}: Props) {

  return (
    <div>
      <PostBox />
    </div>
  );
}

export default Home;

```

### Create app/Avatar.tsx:

Go to [Avatars DiceBear](https://avatars.dicebear.com/)
Also, refer this [doc](https://avatars.dicebear.com/docs/http-api)

#### In next.config.js:

```
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["avatars.dicebear.com"],
  },
};

```

#### Update app/Avatar.tsx:

The HTTP-API is the easiest way to use Avatars. Just use the following URL as image source.

```
    https://avatars.dicebear.com/api/<style>/<seed>.svg

    Replace <style> with adventurer, adventurer-neutral, avataaars, big-ears, big-ears-neutral, big-smile, bottts, croodles, croodles-neutral, identicon, initials, micah, miniavs, open-peeps, personas, pixel-art or pixel-art-neutral. The value of <seed> can be anything you like - but don't use any sensitive or personal data here!
```

In app/Avatar.tsx

```
import { unstable_getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

type Props = {};

async function Avatar({}: Props) {
  const session = await unstable_getServerSession();
  return (
    <Image
      src={`https://avatars.dicebear.com/api/open-peeps/${
        session?.user?.name || "placeholder"
      }.svg`}
      alt="Avatar Image"
      width={50}
      height={50}
      className="rounded-full border-gray-300 bg-white"
    />
  );
}

export default Avatar;

```

To add in a custom seed and set size to large update app/Avatar.tsx even further:

```
import { unstable_getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

type Props = {
  seed?: string;
  large?: boolean;
};

async function Avatar({ seed, large }: Props) {
  const session = await unstable_getServerSession();
  return (
    <Image
      src={`https://avatars.dicebear.com/api/open-peeps/${
        seed || session?.user?.name || "placeholder"
      }.svg`}
      alt="Avatar Image"
      width={50}
      height={50}
      className={`rounded-full border-gray-300 bg-white h-10 w-10 ${
        large && "h-20 w-20"
      }`}
    />
  );
}

export default Avatar;

```

Now you can customise the Avatar as below:

```
 <Avatar seed="valyndsilva" large/>
```

### Create app/Form.tsx:

#### Implement React Hook Form:

Simple form validation with React Hook Form.

Refer the [doc](https://react-hook-form.com/get-started/)

```
npm install react-hook-form
```

In app/Form.tsx:

```
"use client";
import React, { useState } from "react";
import { PhotoIcon, LinkIcon } from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSession } from "next-auth/react";

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

function Form() {
  const { data: session } = useSession();
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  console.log(watch("postTitle")); // watch input value by passing the name of it

  const onSubmit = handleSubmit(async (formData) => {
    console.log(formData);
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

```

### Update app/PostBox.tsx with Avatar and Form component:

```
import React from "react";
import Avatar from "./Avatar";
import Form from "./Form";

function PostBox() {
  return (
    <div className="sticky top-16 z-50">
      <div className="flex space-x-3 my-7 max-w-5xl mx-auto bg-white border border-gray-300 rounded-md p-2">
        {/* @ts-expect-error Server Component */}
        <Avatar />
        <Form />
      </div>
    </div>
  );
}

export default PostBox;
```

## Implementing Subreddits:

### Create Custom Queries and Mutations:

#### Create a custom query:

Add a custom query getSubredditListByTopic to the end of type Query

```
 getSubredditListByTopic(topic: String): [Subreddit]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT * from "subreddit" where "topic" = $1
      """
      configuration: "postgresql_config"
    )
```

#### Create a custom mutation:

Add a custom mutation insertSubreddit after insertPost mutation in type Mutation if it doesn't exist

```
 insertSubreddit(topic: String!): Subreddit
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "subreddit"
      dml: INSERT
      configuration: "postgresql_config"
    )
```

#### Update stepzen/postgresql/index.grahpql

the index.graphql fille will look as below after adding the custom query and mutation:

```
"""
Table 'comment' aliased as GQLName: 'Comment'
"""
type Comment {
  created_at: DateTime
  id: ID!
  post: Post @materializer(query: "getPostUsingComment_post_id_fkey")
  post_id: ID
  text: String
  username: String
}

"""
Table 'post' aliased as GQLName: 'Post'
"""
type Post {
  body: String
  comment: [Comment] @materializer(query: "getCommentUsingComment_post_id_fkey")
  created_at: DateTime
  id: ID!
  image: String
  subreddit: Subreddit
    @materializer(query: "getSubredditUsingPost_subreddit_id_fkey")
  subreddit_id: ID
  title: String
  username: String
  vote: [Vote] @materializer(query: "getVoteUsingVote_post_id_fkey")
}

"""
Table 'subreddit' aliased as GQLName: 'Subreddit'
"""
type Subreddit {
  created_at: DateTime
  id: ID!
  post: [Post] @materializer(query: "getPostUsingPost_subreddit_id_fkey")
  topic: String
}

"""
Table 'vote' aliased as GQLName: 'Vote'
"""
type Vote {
  created_at: DateTime
  id: ID!
  post: Post @materializer(query: "getPostUsingVote_post_id_fkey")
  post_id: ID
  upvote: Boolean
  username: String
}

"""
The following queries are just a set of examples of how to access your schema.
Feel free to modify them or aggregate more.
"""
type Query {
  " Queries for type 'Comment' "
  getComment(id: ID!): Comment
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "comment"
      configuration: "postgresql_config"
    )
  getCommentList: [Comment]
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "comment"
      configuration: "postgresql_config"
    )
  getCommentPaginatedList(first: Int, after: Int): [Comment]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT "created_at", "id", "post_id", "text", "username" FROM "comment" ORDER BY "id" LIMIT $1 OFFSET $2
      """
      configuration: "postgresql_config"
    )
  getCommentUsingComment_post_id_fkey(id: ID!): [Comment]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT "created_at", "id", "post_id", "text", "username" FROM "comment" WHERE "post_id" = $1
      """
      configuration: "postgresql_config"
    )
  " Queries for type 'Post' "
  getPost(id: ID!): Post
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "post"
      configuration: "postgresql_config"
    )
  getPostList: [Post]
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "post"
      configuration: "postgresql_config"
    )
  getPostPaginatedList(first: Int, after: Int): [Post]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT "body", "created_at", "id", "image", "subreddit_id", "title", "username" FROM "post" ORDER BY "id" LIMIT $1 OFFSET $2
      """
      configuration: "postgresql_config"
    )
  getPostUsingComment_post_id_fkey(post_id: ID!): Post
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT "body", "created_at", "id", "image", "subreddit_id", "title", "username" FROM "post" WHERE "id" = $1
      """
      configuration: "postgresql_config"
    )
  getPostUsingPost_subreddit_id_fkey(id: ID!): [Post]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT "body", "created_at", "id", "image", "subreddit_id", "title", "username" FROM "post" WHERE "subreddit_id" = $1
      """
      configuration: "postgresql_config"
    )
  getPostUsingVote_post_id_fkey(post_id: ID!): Post
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT "body", "created_at", "id", "image", "subreddit_id", "title", "username" FROM "post" WHERE "id" = $1
      """
      configuration: "postgresql_config"
    )
  " Queries for type 'Subreddit' "
  getSubreddit(id: ID!): Subreddit
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "subreddit"
      configuration: "postgresql_config"
    )
  getSubredditList: [Subreddit]
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "subreddit"
      configuration: "postgresql_config"
    )
  getSubredditPaginatedList(first: Int, after: Int): [Subreddit]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT "created_at", "id", "topic" FROM "subreddit" ORDER BY "id" LIMIT $1 OFFSET $2
      """
      configuration: "postgresql_config"
    )
  getSubredditUsingPost_subreddit_id_fkey(subreddit_id: ID!): Subreddit
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT "created_at", "id", "topic" FROM "subreddit" WHERE "id" = $1
      """
      configuration: "postgresql_config"
    )
  " Queries for type 'Vote' "
  getVote(id: ID!): Vote
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "vote"
      configuration: "postgresql_config"
    )
  getVoteList: [Vote]
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "vote"
      configuration: "postgresql_config"
    )
  getVotePaginatedList(first: Int, after: Int): [Vote]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT "created_at", "id", "post_id", "upvote", "username" FROM "vote" ORDER BY "id" LIMIT $1 OFFSET $2
      """
      configuration: "postgresql_config"
    )
  getVoteUsingVote_post_id_fkey(id: ID!): [Vote]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT "created_at", "id", "post_id", "upvote", "username" FROM "vote" WHERE "post_id" = $1
      """
      configuration: "postgresql_config"
    )
  getSubredditListByTopic(topic: String): [Subreddit]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT * from "subreddit" where "topic" = $1
      """
      configuration: "postgresql_config"
    )
}

"""
The following mutations are just a set of examples of how to access your schema.
Feel free to modify them or aggregate more.
"""
type Mutation {
  " Mutations for type 'Comment' "
  deleteComment(id: ID!): Comment
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "comment"
      dml: DELETE
      configuration: "postgresql_config"
    )
  insertComment(
    username: String
    post_id: ID
    text: String
    created_at: DateTime
  ): Comment
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "comment"
      dml: INSERT
      configuration: "postgresql_config"
    )
  updateComment(
    id: ID!
    created_at: DateTime
    post_id: ID
    text: String
    username: String
  ): Comment
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      UPDATE "comment" SET
        "created_at" = COALESCE($2, "created_at"),
        "post_id" = COALESCE($3, "post_id"),
        "text" = COALESCE($4, "text"),
        "username" = COALESCE($5, "username")
      WHERE
        "id" = $1
      RETURNING *
      """
      configuration: "postgresql_config"
    )
  " Mutations for type 'Post' "
  deletePost(id: ID!): Post
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "post"
      dml: DELETE
      configuration: "postgresql_config"
    )
  insertPost(
    body: String
    subreddit_id: ID
    created_at: DateTime
    title: String
    username: String
    image: String
  ): Post
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "post"
      dml: INSERT
      configuration: "postgresql_config"
    )
  # insertSubreddit(topic: String!): Subreddit
  #   @dbquery(
  #     type: "postgresql"
  #     schema: "public"
  #     table: "subreddit"
  #     dml: INSERT
  #     configuration: "postgresql_config"
  #   )
  updatePost(
    id: ID!
    body: String
    created_at: DateTime
    image: String
    subreddit_id: ID
    title: String
    username: String
  ): Post
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      UPDATE "post" SET
        "body" = COALESCE($2, "body"),
        "created_at" = COALESCE($3, "created_at"),
        "image" = COALESCE($4, "image"),
        "subreddit_id" = COALESCE($5, "subreddit_id"),
        "title" = COALESCE($6, "title"),
        "username" = COALESCE($7, "username")
      WHERE
        "id" = $1
      RETURNING *
      """
      configuration: "postgresql_config"
    )
  " Mutations for type 'Subreddit' "
  deleteSubreddit(id: ID!): Subreddit
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "subreddit"
      dml: DELETE
      configuration: "postgresql_config"
    )
  insertSubreddit(topic: String, created_at: DateTime): Subreddit
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "subreddit"
      dml: INSERT
      configuration: "postgresql_config"
    )
  updateSubreddit(id: ID!, created_at: DateTime, topic: String): Subreddit
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      UPDATE "subreddit" SET
        "created_at" = COALESCE($2, "created_at"),
        "topic" = COALESCE($3, "topic")
      WHERE
        "id" = $1
      RETURNING *
      """
      configuration: "postgresql_config"
    )
  " Mutations for type 'Vote' "
  deleteVote(id: ID!): Vote
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "vote"
      dml: DELETE
      configuration: "postgresql_config"
    )
  insertVote(
    username: String
    post_id: ID
    created_at: DateTime
    upvote: Boolean
  ): Vote
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "vote"
      dml: INSERT
      configuration: "postgresql_config"
    )
  updateVote(
    id: ID!
    created_at: DateTime
    post_id: ID
    upvote: Boolean
    username: String
  ): Vote
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      UPDATE "vote" SET
        "created_at" = COALESCE($2, "created_at"),
        "post_id" = COALESCE($3, "post_id"),
        "upvote" = COALESCE($4, "upvote"),
        "username" = COALESCE($5, "username")
      WHERE
        "id" = $1
      RETURNING *
      """
      configuration: "postgresql_config"
    )
}

```

### Create a graphql folder in the root directory.

In graphql folder, create mutations.tsx and queries.tsx.

#### In graphql/mutations.ts:

```
import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation MyMutation(
    $body: String
    $subreddit_id: ID
    $created_at: DateTime
    $title: String
    $username: String
    $image: String
  ) {
    insertPost(
      body: $body
      subreddit_id: $subreddit_id
      created_at: $created_at
      title: $title
      username: $username
      image: $image
    ) {
      body
      subreddit_id
      created_at
      title
      username
      image
    }
  }
`;

export const ADD_SUBREDDIT = gql`
  mutation MyMutation($topic: String!) {
    insertSubreddit(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;


```

On form submit, we check if subreddit exists. If not, create new one else get existing ones id.

#### In garphql/queries.ts:

```
import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

```

#### Update app/Form.tsx:

```
"use client";
import React, { useState } from "react";
import { PhotoIcon, LinkIcon } from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useMutation } from "@apollo/client";
import { ADD_POST, ADD_SUBREDDIT } from "../graphql/mutations";
import client from "../apollo-client";
import { GET_SUBREDDIT_BY_TOPIC } from "../graphql/queries";

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
        //create subreddit
        console.log("Subreddit is new! -> Creating a new Subreddit!");
        const {
          data: { insertSubreddit: newSubreddit },
        } = await addSubreddit({
          variables: { topic: formData.subreddit },
        });
        console.log("Creatingpost...", formData);
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
      setValue("subreddit", "");
      setValue("postImage", "");
    } catch (error) {
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

```

## Implement [React Hot Toast](https://www.npmjs.com/package/react-hot-toast) Library:

```
npm install react-hot-toast
```

### Update app/Providers.tsx:

Include Toaster component here.

```
"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { Toaster } from "react-hot-toast";

function Providers({ children }: { children: React.ReactNode }) {
  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  // `session` will match the returned value of `callbacks.session()` from `NextAuth()`
  //   const { data: session } = useSession();
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ApolloProvider client={client}>
        <SessionProvider>
          <Toaster />
          {children}
        </SessionProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default Providers;


```

### Update app/Form.tsx:

```
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

```

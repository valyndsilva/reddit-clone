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
        <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
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
    <div className="sticky top-16 z-40">
      <div className="flex space-x-3 bg-white border border-gray-300 rounded-md p-2">
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
  vote: [Vote] @materializer(query: "####UsingVote_post_id_fkey")
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
  ####(id: ID!): Vote
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "vote"
      configuration: "postgresql_config"
    )
  ####List: [Vote]
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "vote"
      configuration: "postgresql_config"
    )
  ####PaginatedList(first: Int, after: Int): [Vote]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT "created_at", "id", "post_id", "upvote", "username" FROM "vote" ORDER BY "id" LIMIT $1 OFFSET $2
      """
      configuration: "postgresql_config"
    )
  ####UsingVote_post_id_fkey(id: ID!): [Vote]
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
     $title: String!
    $body: String!
    $image: String!
    $subreddit_id: ID!
    $username: String!
  ) {
   insertPost(
      title: $title
      body: $body
      image: $image
      subreddit_id: $subreddit_id
      username: $username
    ) {
      title
      body
      image
      subreddit_id
      username
      created_at
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

## Building Feed Component and Functionality:

### Create Feed Component:

In app/Feed.tsx:

```
import React from "react";

type Props = {};

function Feed({}: Props) {
  return <div>Feed</div>;
}

export default Feed;

```

### Update app/page.tsx:

```
import React from "react";
import Feed from "./Feed";
import PostBox from "./PostBox";
type Props = {};

async function Home({}: Props) {
  return (
     <div className="my-7 mx-auto max-w-5xl">
      <PostBox />
      <div className="flex">
          {/* @ts-expect-error Server Component */}
        <Feed />
      </div>
    </div>
  );
}

export default Home;
```

### Update graphql/queries.tsx:

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

export const GET_ALL_POSTS = gql`
  query MyQuery {
    getPostList {
      body
      created_at
      id
      image
      subreddit_id
      title
      username
    }
  }
`;

```

### In stepzen/postgresql/index.graphql:

We use the existing queries like: getSubredditUsingPost_subreddit_id_fkey, ####UsingVote_post_id_fkey and getCommentUsingComment_post_id_fkey.

The type Post looks like:

```
type Post {
  title: String
  body: String
  image: String
  comment: [Comment] @materializer(query: "getCommentUsingComment_post_id_fkey")
  created_at: DateTime
  id: ID!
  subreddit: Subreddit
    @materializer(query: "getSubredditUsingPost_subreddit_id_fkey")
  subreddit_id: ID
  username: String
  vote: [Vote] @materializer(query: "####UsingVote_post_id_fkey")
}
```

getSubredditUsingPost_subreddit_id_fkey query:

```
getSubredditUsingPost_subreddit_id_fkey(subreddit_id: ID!): Subreddit
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT "created_at", "id", "topic" FROM "subreddit" WHERE "id" = $1
      """
      configuration: "postgresql_config"
    )
```

####UsingVote_post_id_fkey query:

```
 ####UsingVote_post_id_fkey(id: ID!): [Vote]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT "created_at", "id", "post_id", "upvote", "username" FROM "vote" WHERE "post_id" = $1
      """
      configuration: "postgresql_config"
    )
```

getCommentUsingComment_post_id_fkey query:

```
getCommentUsingComment_post_id_fkey(id: ID!): [Comment]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT "created_at", "id", "post_id", "text", "username" FROM "comment" WHERE "post_id" = $1
      """
      configuration: "postgresql_config"
    )
```

### Create a dummy comment and vote in Supabase for testing purposes:

Go to table editor > comment > Insert row > post_id:1, text:This is a comment, username:test > Save
Go to table editor > vote > Insert row > post_id:1, upvote:true, username:test > Save

#### Go to http://localhost:5001/api/reddit-clone and test queries:

```
query GetAllPosts {
  getPostList {
    body
    created_at
    id
    image
    subreddit_id
    title
    username
    subreddit {
      topic
      id
      created_at
    }
    comment {
      created_at
      id
      post_id
      text
      username
    }
    vote {
      created_at
      id
      post_id
      upvote
      username
    }
  }
}
```

It should show the subreddit, comment and vote data.

### Update GET_ALL_POSTS in graphql/queries.tsx

```
import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query GetSubredditByTopic($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    getPostList {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      subreddit {
        topic
        id
        created_at
      }
      comment {
        created_at
        id
        post_id
        text
        username
      }
      vote {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

```

### Create a typings.d.ts file in the root directory:

```
type Comments = {
  created_at: string;
  id: number;
  post_id: number;
  text: string;
  username: string;
};

type Vote = {
  created_at: string;
  id: number;
  post_id: number;
  upvote: boolean;
  username: string;
};

type Subreddit = {
  created_at: string;
  id: number;
  topic: string;
};

type Post = {
  body: string;
  created_at: string;
  id: number;
  image: string;
  subreddit_id: number;
  title: string;
  username: string;
  vote: Vote[];
  comment: Comment[];
  subreddit: Subreddit;
};

```

### Create app/Post.tsx:

```
import React from "react";

type Props = {};

function Post({}: Props) {
  return <div>Post</div>;
}

export default Post;

```

### Update app/Feed.tsx:

```
"use client";
import client from "../apollo-client";
import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_POSTS } from "../graphql/queries";
import Post from "./Post";

function Feed() {
  // const { data, error } = await client.query({
  //   query: GET_ALL_POSTS,
  // });
  const { data, error } = useQuery(GET_ALL_POSTS);
  if (data) {
    console.log("Data:", data);
  } else {
    console.log(error);
  }
  const posts: Post[] = data?.getPostList;
  // console.log("Posts:", posts);


  return (
     <div className="mt-5 space-y-4 max-w-5xl mx-auto flex-1">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;


```

### Update styles/globals.css:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .icon {
    @apply h-8 w-8  cursor-pointer rounded-sm space-x-2 p-1 lg:hover:bg-gray-100;
  }
  .voteButtons {
    @apply h-6 w-6 hover:bg-gray-200 p-1 rounded-md;
  }
  .postButtons {
    @apply flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm;
  }
}

```

### Install [React TimeAgo](https://www.npmjs.com/package/react-timeago):

```
npm i react-timeago
npm i --save-dev @types/react-timeago
```

### Create app/Time.tsx:

```
"use client";
import React from "react";
import TimeAgo from "react-timeago";
type Props = {
  date: string;
};

function Time({ date }: Props) {
  return <TimeAgo date={date} />;
}

export default Time;

```

### Upload dummy images:

Add a few dummy images to your repo and force add the image urls in the post table in supabase for testing while creating the post component.

### Update app/Post.tsx:

```
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  GifIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Avatar from "./Avatar";
import Time from "./Time";

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  //   console.log(post.subreddit.topic);
  // console.log(post);
  return (
    <div className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
      {/* Votes */}
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon className="voteButtons hover:text-red-400" />
        <p className="text-xs font-bold text-black">0</p>
        <ArrowDownIcon className="voteButtons hover:text-blue-400" />
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
            <span className="font-bold text-black hover:text-blue-400 hover:underline">
              r/{post.subreddit.topic}
            </span>{" "}
            · Posted by u/{post.username} <Time date={post.created_at} />
          </p>
        </div>

        {/* Body */}
        <div className="py-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
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

```

### Implementing Re-fetching Post Data Functionality:

When you create a new post, the page does not re-fetch the updated information automatically. We can fix this by re-fetching.

#### Update app/Form.tsx:

We update this line:

```
const [addPost] = useMutation(ADD_POST);
```

to this:

```
  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [GET_ALL_POSTS, "getPostList"],
  });
```

#### To set the order of the posts:

In stepzen/postgresql/index.graphql:

Replace this:

```
  getPostList: [Post]
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "post"
      configuration: "postgresql_config"
    )
```

with this:

```
  getPostList: [Post]
    @dbquery(
      type: "postgresql"
      schema: "public"
      # table: "post"
      query: """
      SELECT * FROM "post" JOIN "subreddit" ON "subreddit"."id" = "post"."subreddit_id" ORDER BY "post"."created_at" DESC
      """
      configuration: "postgresql_config"
    )
```

OR:

```
  getPostList: [Post]
    @dbquery(
      type: "postgresql"
      schema: "public"
      # table: "post"
      query: """
      SELECT * FROM "post"
      ORDER BY "post"."created_at" DESC
      """
      configuration: "postgresql_config"
    )
```

Note: Now if you add a new post it should be automatically re-fetched and updated. For useMutation to work you need to use it in combination with useQuery as useMutation re-triggers useQuery on re-fetching.

## Building Subreddit Page:

### Create app/subreddit/[topic]/page.tsx:

Ex: http://localhost:3000/subreddit/reactjs

```
import React from "react";
import Avatar from "../../Avatar";
import Feed from "../../Feed";
import PostBox from "../../PostBox";

type Props = { params?: { [key: string]: string | string[] | undefined } };

function Subreddit({ params }: Props) {
  // E.g. `/subreddit/nextjs`
  console.log("URL Params:", params);
  const topic = params!.topic;
  return (
    <div className="h-24 bg-red-400 p-8">
      {/* <p>{params!.topic}</p> */}
      <div className="-mx-8 mt-10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center space-x-4 pb-3">
          <div className="-mt-5">
            {/* @ts-expect-error Server Component */}
            <Avatar seed={topic as string} large />
          </div>
          <div className="py-2">
            <h1 className="text-3xl font-semibold">
              Welcome to the r/{topic} subreddit{" "}
            </h1>
            <p className="text-sm text-gray-400">r/{topic}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl pb-10 mt-5">
        <PostBox subreddit={topic as string} />
        <Feed />
      </div>
    </div>
  );
}

export default Subreddit;


```

### Update app/PostBox.tsx:

Add subreddit prop:

```
import React from "react";
import Avatar from "./Avatar";
import Form from "./Form";

type Props = {
  subreddit?: string;
};

function PostBox({ subreddit }: Props) {
  return (
    <div className="sticky top-16 z-40">
      <div className="flex space-x-3 bg-white border border-gray-300 rounded-md p-2">
        {/* @ts-expect-error Server Component */}
        <Avatar />
        <Form subreddit={subreddit} />
      </div>
    </div>
  );
}

export default PostBox;

```

### Update app/Form.tsx:

Check if we passed a subreddit already and update the form inputs accordingly.

```
"use client";
import React, { useState } from "react";
import { PhotoIcon, LinkIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useMutation } from "@apollo/client";
import { ADD_POST, ADD_SUBREDDIT } from "../graphql/mutations";
import client from "../apollo-client";
import { GET_ALL_POSTS, GET_SUBREDDIT_BY_TOPIC } from "../graphql/queries";
import toast from "react-hot-toast";

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

type Props = {
  subreddit?: string;
};

function Form({ subreddit }: Props) {
  console.log("Subreddit:", subreddit);
  const { data: session } = useSession();
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);

  // const [addPost] = useMutation(ADD_POST);
  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [GET_ALL_POSTS, "getPostList"],
  });

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
          topic: subreddit || formData.subreddit,
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
            session
              ? subreddit
                ? `Create a post in r/${subreddit}`
                : "Create a post by entering a title"
              : "Sign in to post"
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

          {!subreddit && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Subreddit:</p>
              <input
                className=" m-2 flex-1 bg-blue-50  p-2 outline-none"
                {...register("subreddit", { required: true })}
                type="text"
                placeholder="i.e nextjs"
              />
            </div>
          )}

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

### Update app/subreddit/[topic]/page.tsx:

```
import React from "react";
import Avatar from "../../Avatar";
import Feed from "../../Feed";
import PostBox from "../../PostBox";

type Props = { params?: { [key: string]: string | string[] | undefined } };

function Subreddit({ params }: Props) {
  // E.g. `/subreddit/nextjs`
  console.log("URL Params:", params);
  const topic = params!.topic;
  return (
    <div className="h-24 bg-red-400 p-8">
      {/* <p>{params!.topic}</p> */}
      <div className="-mx-8 mt-10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center space-x-4 pb-3">
          <div className="-mt-5">
            {/* @ts-expect-error Server Component */}
            <Avatar seed={topic as string} large />
          </div>
          <div className="py-2">
            <h1 className="text-3xl font-semibold">
              Welcome to the r/{topic} subreddit{" "}
            </h1>
            <p className="text-sm text-gray-400">r/{topic}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl pb-10 mt-5">
        <PostBox subreddit={topic as string} />
        <Feed topic={topic as string} />
      </div>
    </div>
  );
}

export default Subreddit;
```

### Update stepzen/postgresql/index.graphql:

Create a new query called getPostListByTopic.

```
  getPostListByTopic(topic: String!): [Post]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT *, "post".id FROM "post"
      JOIN "subreddit" ON "subreddit"."id"="post"."subreddit_id"
      WHERE "subreddit"."topic"=$1
      ORDER BY "post"."created_at" DESC
      """
      configuration: "postgresql_config"
    )
```

### Update graphql/queries.tsx:

```
import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query GetSubredditByTopic($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    getPostList {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      subreddit {
        topic
        id
        created_at
      }
      comment {
        created_at
        id
        post_id
        text
        username
      }
      vote {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;


export const GET_ALL_POSTS_BY_TOPIC = gql`
  query GetAllPostsByTopic($topic: String!) {
    getPostListByTopic(topic:$topic) {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      subreddit {
        topic
        id
        created_at
      }
      comment {
        created_at
        id
        post_id
        text
        username
      }
      vote {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;


```

### Update app/Feed.tsx:

```
"use client";
import client from "../apollo-client";
import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from "../graphql/queries";
import Post from "./Post";

type Props = {
  topic?: string;
};
function Feed({ topic }: Props) {
  // const { data, error } = await client.query({
  //   query: GET_ALL_POSTS,
  // });

  // const { data, error } = useQuery(GET_ALL_POSTS);

  const { data, error } = !topic
    ? useQuery(GET_ALL_POSTS)
    : useQuery(GET_ALL_POSTS_BY_TOPIC, { variables: { topic: topic } });

  if (data) {
    console.log("Data:", data);
  } else {
    console.log(error);
  }

  // const posts: Post[] = data?.getPostList;
  const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic;
  console.log("Posts:", posts);

  return (
      <div className="mt-5 space-y-4 max-w-5xl mx-auto flex-1">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;

```

### Update app/Header.tsx:

Add link to homepage.

```
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
import Link from "next/link";

type Props = {};

export default async function Header({}: Props) {
  // const loggedIn = false;
  const session = await unstable_getServerSession();
  // console.log(session);
  // console.log("Header here!");

  return (
    <>
      <div className="sticky top-0 z-50 flex bg-white px-4 py-2">
        <div className="relative hidden lg:inline-flex flex-shrink-0 cursor-pointer">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="reddit logo"
              width={96}
              height={40}
              className="object-contain"
            />
          </Link>
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

```

### Update app/Post.tsx:

Add link to subreddit.

```
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
import React from "react";
import Avatar from "./Avatar";
import Time from "./Time";

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  // console.log(post.subreddit.topic);
  // console.log(post);

  return (
      <div className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
        {/* Votes */}
        <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
          <ArrowUpIcon className="voteButtons hover:text-red-400" />
          <p className="text-xs font-bold text-black">0</p>
          <ArrowDownIcon className="voteButtons hover:text-blue-400" />
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

```

### Create app/post/[postId]/page.tsx:

```
import React from "react";
type Props = { params?: { [key: string]: string | string[] | undefined } };

function page({ params }: Props) {
  console.log("postID URL Params:",params);
  return <div>{params!.postId}</div>;
}

export default page;

```

### Update stepzen/postgresql/index.graphql:

Add a new query getPostListByPostId.

```
  getPostListByPostId(post_id: ID!): Post
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT * FROM "post"
      WHERE "post"."id" = $1
      """
      configuration: "postgresql_config"
    )
```

### Update grpahql/queries.tsx:

Create GET_POST_BY_POST_ID.

```
import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query GetSubredditByTopic($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;


export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    getPostList {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      subreddit {
        topic
        id
        created_at
      }
      comment {
        created_at
        id
        post_id
        text
        username
      }
      vote {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query GetAllPostsByTopic($topic: String!) {
    getPostListByTopic(topic: $topic) {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      subreddit {
        topic
        id
        created_at
      }
      comment {
        created_at
        id
        post_id
        text
        username
      }
      vote {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;


export const GET_POST_BY_POST_ID = gql`
  query GetPostByPostId($post_id: ID!) {
    getPostListByPostId(post_id: $post_id) {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      subreddit {
        topic
        id
        created_at
      }
      comment {
        created_at
        id
        post_id
        text
        username
      }
      vote {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

```

### Install UI Ball Loaders:

Go to https://uiball.com/loaders/

```
npm i @uiball/loaders
```

### Update app/Post.tsx:

```
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
import React from "react";
import Avatar from "./Avatar";
import Time from "./Time";
import { Jelly } from "@uiball/loaders";

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  // console.log(post.subreddit.topic);
  // console.log(post);
  if(!post) return (
    <div className="flex w-full items-center p-10 justify-center text-xl">
      <Jelly size={50} color="#FF4501" />
    </div>
  );

  return (

      <div className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
        {/* Votes */}
        <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
          <ArrowUpIcon className="voteButtons hover:text-red-400" />
          <p className="text-xs font-bold text-black">0</p>
          <ArrowDownIcon className="voteButtons hover:text-blue-400" />
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

```

### Update app/post/[postId]/page.tsx:

```
"use client";
import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_BY_POST_ID } from "../../../graphql/queries";
import Post from "../../Post";
type Props = { params?: { [key: string]: string | string[] | undefined } };

function page({ params }: Props) {
  console.log("postID URL Params:", params);

  // While doing pre-fecth post is undefined
  const { data, error } = useQuery(GET_POST_BY_POST_ID, {
    variables: { post_id: params!.postId },
  });

  if (data) {
    console.log("Data:", data);
  } else {
    console.log(error);
  }

  // const posts: Post[] = data?.getPostList;
  const post: Post = data?.getPostListByPostId;
  console.log("Post:", post);

  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />
    </div>
  );
}

export default page;

```

## Create Comment Functionality:

### Update app/post/[postId]/page.tsx:

```
"use client";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import React from "react";
import { GET_POST_BY_POST_ID } from "../../../graphql/queries";
import Post from "../../Post";
type Props = { params?: { [key: string]: string | string[] | undefined } };

function page({ params }: Props) {
  console.log("postID URL Params:", params);

  const { data: session } = useSession();

  // While doing pre-fecth post is undefined
  const { data, error } = useQuery(GET_POST_BY_POST_ID, {
    variables: { post_id: params!.postId },
  });

  if (data) {
    console.log("Data:", data);
  } else {
    console.log(error);
  }

  // const posts: Post[] = data?.getPostList;
  const post: Post = data?.getPostListByPostId;
  console.log("Post:", post);

  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />
      <div className="-mt-1 rounded-b-md border-t-0 border-gray-300 bg-white p-5 pl-16">
        <p className="text-sm">
          {" "}
          Comment as <span className="text-red-500">{session?.user?.name}</span>
        </p>

        <form className="flex flex-col space-y-2">
          <textarea
            disabled={!session}
            className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
            placeholder={
              session ? "What are your thoughts?" : "Pleasesign in to comment"
            }
          />
          <button
            disabled={!session}
            type="submit"
            className="rounded-full bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200"
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;

```

### Implementing React Hook Form in app/post/[postId]/page.tsx:

```
"use client";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GET_POST_BY_POST_ID } from "../../../graphql/queries";
import Post from "../../Post";

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
  };

  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />
      {post &&
      <div className="-mt-1 rounded-b-md border-t-0 border-gray-300 bg-white p-5 pl-16">
        <p className="text-sm">
          {" "}
          Comment as <span className="text-red-500">{session?.user?.name}</span>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2"
        >
          <textarea
            {...register("comment")}
            disabled={!session}
            className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
            placeholder={
              session ? "What are your thoughts?" : "Pleasesign in to comment"
            }
          />
          <button
            disabled={!session}
            type="submit"
            className="rounded-full bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200"
          >
            Comment
          </button>
        </form>
      </div>
      }
    </div>
  );
}

export default page;

```

### Create a mutation to add comments:

We need to create a new mutation ADD_COMMENT. We make use of the existing insertComment in stepzen/postgresql/indes.graphql:

```
 insertComment(username: String, post_id: ID, text: String): Comment
    @dbquery(
      type: "postgresql"
      schema: "public"
      table: "comment"
      dml: INSERT
      configuration: "postgresql_config"
    )
```

In graphql/mutations.tsx:

```
import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation MyMutation(
    $title: String!
    $body: String!
    $image: String!
    $subreddit_id: ID!
    $username: String!
  ) {
    insertPost(
      title: $title
      body: $body
      image: $image
      subreddit_id: $subreddit_id
      username: $username
    ) {
      title
      body
      image
      subreddit_id
      username
      created_at
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

export const ADD_COMMENT = gql`
  mutation MyMutation($post_id:ID!, $username:String!, $text: String!) {
    insertComment(post_id: $post_id,username:$username,text:$text) {
      created_at
      id
      post_id
      text
      username
    }
  }
`;

```

### Refetching all the Comments when a new comment is added:

In app/post/[postId]/page.tsx:

```
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

  if (data) {
    console.log("Data:", data);
  } else {
    console.log(error);
  }

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
    console.log("Form data:", data);
  };

  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />
      {post && (
        <>
          <div className="-mt-1 rounded-b-md border-t-0 border-gray-300 bg-white p-5 pl-16">
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
                className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
                placeholder={
                  session
                    ? "What are your thoughts?"
                    : "Pleasesign in to comment"
                }
              />
              <button
                disabled={!session}
                type="submit"
                className="rounded-full bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200"
              >
                Comment
              </button>
            </form>
          </div>

          <div className="-my-5 rounded-b-md border-t-0 border-gray-300 bg-white py-5 px-10">
            <hr className="py-2" />
            {post?.comment.map((comment) => (
              <div
                key={comment.id}
                className="relative flex items-center space-x-2 space-y-5"
              >
                <hr className="absolute top-10 h-16 border left-7 z-0 " />
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
                    <span className="font-semibold text-gray-600">
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

```

## Implement UpVote and DownVote Functionality:

### We make use of the existing query insertVote in stepzen/postgresql/index.graphql:

```
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
```

### Add a new mutation in graphql/mutations.tsx:

```

export const ADD_VOTE = gql`
  mutation MyMutation(
    $username: String!
    $post_id: ID!
    $created_at: DateTime!
    $upvote: Boolean!
  ) {
    insertVote(
      username: $username
      post_id: $post_id
      created_at: $created_at
      upvote: $upvote
    ) {
      created_at
      id
      post_id
      upvote
      username
    }
  }
`;

```

### Create a new query getVotesByPostId in in stepzen/postgresql/index.graphql:

```
getVotesByPostId(post_id: ID!): [Vote]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT * FROM "vote" WHERE "post_id" = $1 ORDER BY "created_at"  DESC
      """
      configuration: "postgresql_config"
    )
```

### Add a new query in graphq/queries.tsx:

```
export const GET_ALL_VOTES_BY_POST_ID = gql`
  query GetAllVotesByPostId($post_id: ID!) {
   getVotesByPostId(post_id: $post_id) {
        created_at
        id
        post_id
        upvote
        username
    }
  }
`;
```

### In app/Post.tsx:

```
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

  console.log("Data:", data);
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
    console.log("Votes:", votes);
    // Latest vote (As we sorted by newly created first in SQL query with ORDER BY "created_at"  DESC)
    // Note: You could improve this by moving it to the original Query
    const vote = votes?.find(
      (vote) => vote.username === session?.user?.name
    )?.upvote;
    console.log("isUpvote:", vote);

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

```

## Implement Top Communitites:

### Create a new query getSubredditListLimit in stepzen/postgresql/index.graphql:

```
 getSubredditListLimit(limit: Int!): [Subreddit]
    @dbquery(
      type: "postgresql"
      schema: "public"
      query: """
      SELECT  * FROM "subreddit" ORDER BY "created_at" DESC LIMIT $1
      """
      configuration: "postgresql_config"
    )
```

### Add a the new query in graphql/queries.tsx:

```
export const GET_SUBREDDITS_WITH_LIMIT = gql`
  query GetSubredditsByLimit($limit: Int!) {
    getSubredditListLimit(limit: $limit) {
      created_at
      id
      topic
    }
  }
`;
```

### Update app/page.tsx:

```
import React from "react";
import Feed from "./Feed";
import PostBox from "./PostBox";
import TopCommunities from "./TopCommunities";
type Props = {};

async function Home({}: Props) {
  return (
    <div className="my-7 mx-auto max-w-5xl">
      <PostBox />
      <div className="flex">
        <Feed />
        <div className="flex-col sticky top-36 mx-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline-flex">
          <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>

          {/* List subreddits */}
          <TopCommunities />
        </div>
      </div>
    </div>
  );
}

export default Home;


```

### Create app/TopCommunities.tsx:

```
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
    <div>
      {subreddits?.map((subreddit, index) => (
        <SubredditRow key={subreddit.id} topic={subreddit.topic} index={index}/>
      ))}
    </div>
  );
}

export default TopCommunities;

```

### Create app/SubredditRow.tsx:

```
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
    <div className="flex items-center space-x-2 border-t bg-white px-4 py-2 last:rounded-b">
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

```



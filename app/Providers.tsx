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

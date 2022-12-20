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

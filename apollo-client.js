import { ApolloClient, InMemoryCache } from "@apollo/client";

const headers = {
  // Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
  Authorization: `Apikey tomsriver::stepzen.net+1000::14a3a1eb780b28c5d4015000736b93cc06ac42b1f751c2978906d25c43dd3e9c`,
};

const client = new ApolloClient({
  // uri: process.env.STEPZEN_API_URL,
  // uri: "https://tomsriver.stepzen.net/api/reddit-clone/__graphql",
  uri: "http://localhost:5001/api/reddit-clone",
  headers,
  cache: new InMemoryCache(),
});

export default client;

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

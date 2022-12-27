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
  mutation MyMutation($post_id: ID!, $username: String!, $text: String!) {
    insertComment(post_id: $post_id, username: $username, text: $text) {
      created_at
      id
      post_id
      text
      username
    }
  }
`;

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

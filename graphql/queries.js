/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPosts = /* GraphQL */ `
  query GetPosts($id: ID!) {
    getPosts(id: $id) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

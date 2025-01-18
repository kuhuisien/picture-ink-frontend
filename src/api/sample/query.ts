import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
  query bookDetails {
    bookById(id: "book-2") {
      id
      name
      pageCount
      author {
        id
        firstName
        lastName
      }
    }
  }
`;

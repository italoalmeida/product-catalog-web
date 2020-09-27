import { gql } from "@apollo/client";

export const LIST_PRODUCT = gql`
  query {
    listProduct {
      id
      name
      description
      price
      createdAt
      updatedAt
      user {
        email
      }
    }
  }
`;

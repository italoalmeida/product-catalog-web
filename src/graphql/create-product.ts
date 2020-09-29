import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation($name: String!, $description: String, $price: Float, $userId: Int!) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        userId: $userId
      }
    ) {
      id
      name
    }
  }
`;

import { gql } from "apollo-boost";
export const test = gql`
{
  testField{
    id
    title
    question
  }
}
`;
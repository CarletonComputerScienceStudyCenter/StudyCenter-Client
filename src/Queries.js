import { gql } from "apollo-boost";
export const test = gql`
{
  questions{
    id
    question
    hasMathjax
    correctAnswer{
      id
      answer
    }
    answers{
      id
      answer
    }
  }
}
`;
import { gql } from "apollo-boost";
export const test = gql`
{
  questions{
    id
    question
    hasMathjax
    answers{
      id
      answer
    }
  }
}
`;

export const QUIZ = gql`
query quiz($id: ID!){
    quiz(id: $id) {
      id
      title
      description
      questions{
        id
        body
        correctAnswer{
          id
          answer
        }
        answers{
          id
          answer
        }
      }
      course{
          title
          code
      }
    }
  }
`;
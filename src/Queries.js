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
        pseudocode
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

export const QUIZZES = gql`
{
  quizzes{
    id
    title
  }
}
`;
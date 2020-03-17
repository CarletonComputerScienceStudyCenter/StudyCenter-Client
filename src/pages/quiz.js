  
import React, { useEffect, useState } from 'react';
import '../style/quiz.scss';
import MathJax from 'react-mathjax-preview'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { QUIZ } from '../Queries'
import QuizContent from '../components/quiz/Quiz'
import { css } from "@emotion/core";
import Footer from '../components/Footer'
import PulseLoader from "react-spinners/PulseLoader";

const Quiz = () => {

let [loading, setLoading] = useState(true);
let [quiz, setQuiz] = useState();
let [quizAnswers, setAnswers] = useState();
let [mark,setMark] = useState(0);
let [submitted, setSubmitted] = useState(false);

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin: auto;
  height:100vh;
  margin-top:20em;
`;

//This code chunk is to induce a remount, the mathjax component needs a remount to concurrently typeset each mathml component
if(window.location.href.indexOf("arrive") > -1){ 
  window.scrollTo(0,0);
  window.location.href = process.env.PUBLIC_URL+"/#/quiz";
  window.location.reload();
}

useEffect(() => {
  if(loading){
    getQuiz();
  }
})

const httpLink = createHttpLink({
  uri: 'http://localhost:3030/graphql',
  headers: {
      "Content-Type": "application/json",
  }
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

const selectAnswer = async (questionId,answerId) =>{
  let newAnswers = quizAnswers;
  newAnswers[questionId] = parseInt(answerId);
  setAnswers(newAnswers)
}

const shuffle = (array) =>{
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


const getQuiz = async () =>{

  let data = await client
      .query({
          query: QUIZ,
          variables: {
              "id": '1'
            }
      });
  
  console.log(data.data.quiz);
  
  let answers = {};
  for(let i=0;i<data.data.quiz.questions.length;i++){
      //shuffle(data.data.quiz.questions[i].answers);
      answers[data.data.quiz.questions[i].id] = null;
  }
  //shuffle(data.data.quiz.questions);

  setAnswers(answers);
  setQuiz(data.data.quiz);
  setLoading(false)
}

const submitQuiz = async () =>{
  window.scrollTo(0,0);

  let qTotal = quiz.questions.length;
  let mark = 0;
  for(let i=0;i<qTotal;i++){
      if(quiz.questions[i].correctAnswer.id == quizAnswers[quiz.questions[i].id]){
          mark +=1;
      }
  }
  setSubmitted(true);
  setMark(mark);
}

  return (
      <>
      <div className="quiz-page">
        
        {loading ? 
          <PulseLoader
          css={override}
          size={10}
          color={"gray"}
          loading={loading}
          />
        :
        <>
         <QuizContent quiz={quiz} quizAnswers={quizAnswers} setLoading={setLoading} selectAnswer={selectAnswer} submitted={submitted} mark={mark}/>
         <div className="quiz-page-submit-button" onClick={submitQuiz}>Submit</div>
        </>
        
        }
      </div>
      <Footer/>
      </>
  );
}

export default Quiz;

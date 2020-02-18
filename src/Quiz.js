  
import React, { useEffect, useState } from 'react';
import './style/Quiz.scss';
import MathJax from 'react-mathjax-preview'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { test } from './Queries'

function Quiz() {

let [questions,setQuestions] = useState([])
let [loading, setLoading] = useState(true);


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
const queryData = async () =>{

    let data = await client
      .query({
        query: test,
      });


    setQuestions(data.data.questions);
    console.log(data.data.questions)
    setLoading(false);
}

  return (
      <div className="quiz">
        {loading ? "loading..." :
        
        questions.map( item => (
          <>
          <MathJax math={item.question} />
          <br></br>
            <div className="question-answers">
            { item.answers.map( answer => (
              <div className="question-answer">
                <input type="radio" name={item.id} value={answer.answer}></input>
                <label>{answer.answer}</label><br></br>
              </div>
            ))
            }
            </div>
          </>
        ))
       
        }
       <button onClick={queryData} value={"ok"}></button>
      </div>
  );
}

export default Quiz;

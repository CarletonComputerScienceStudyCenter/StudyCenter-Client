  
import React, { useEffect, useState } from 'react';
import './style/App.scss';
import MathJax from 'react-mathjax-preview'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { test } from './Queries'



function App() {

let [math,setMath] = useState([])
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


    setMath(data.data);
    console.log(data.data.testField[13].question)
    setLoading(false);
}

  return (
    <div className="App">
      <header className="App-header">
        {loading ? "loading..." :
        
        math.testField.map( item => (
          <>
          <hr></hr>
          <MathJax math={item.question} />
          </>
        ))
       
        }
       <button onClick={queryData} value={"ok"}></button>
      </header>
    </div>
  );
}

export default App;

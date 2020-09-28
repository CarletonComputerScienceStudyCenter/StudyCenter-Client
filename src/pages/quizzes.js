
  
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import CourseTile from '../components/course/CourseTile'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Link } from "react-router-dom";
import { QUIZZES } from '../Queries'
import '../style/course.scss';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

const Quizzes = (props) => {
    let [loading, setLoading] = useState(true);
    let [quizzes, setQuizzes] = useState();

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    margin: auto;
    height:100vh;
    margin-top:20em;
    `;

    const redirect = async (id) => {
        await props.setQuiz(id)
        window.location.href = process.env.PUBLIC_URL+"/#/quiz?arrive=true&id="+id;
    }

    useEffect(() => {
        if(loading){
            getQuizzes();
        }
    })

    const httpLink = createHttpLink({
        uri: 'http://localhost:3030/graphql',//https://computersciencestudycenter.herokuapp.com/graphql
        headers: {
            "Content-Type": "application/json",
        }
    })

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    })

    const getQuizzes = async () =>{

        let data = await client
            .query({
                query: QUIZZES,
                variables: {
                    "id": '1'
                }
            });
        
        console.log(data.data.quizzes);
        
        setQuizzes(data.data.quizzes);
        setLoading(false);
    }
  
  return(
  <div className="course-page">
      <>
        {loading ? 
          <PulseLoader
          css={override}
          size={10}
          color={"gray"}
          loading={loading}
          />
        :
        <div className="quiz-page-tile-grid">
            {
                quizzes.map( quiz => (
                    <span onClick={() => redirect(quiz.id)}><CourseTile tile={quiz.title} icon={1}/></span>
                ))
            }
            <Link to="/course" onClick={()=>{window.scrollTo(0,0)}}><CourseTile tile={"Back"} icon={3}/></Link>
        </div>
        }
        </>
    <Footer/>
  </div>
  );
}

export default Quizzes

  
import React, { useEffect, useState } from 'react';
import './style/App.scss';
import Quiz from './pages/quiz';
import Quizzes from './pages/quizzes';
import Home from './pages/home';
import Course from './pages/course';
import About from './pages/about';
import Header from './components/Header';
import Footer from './components/Footer'
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  let [quiz, setQuiz] = useState();
  return (
    <div className="App">
      <Router>
        <Header/>
        <HeaderMargin/>
        <Route exact path="/" component={()=><Home/>} />
        <Route path="/about" component={()=><About/>} />
        <Route path="/quiz" component={()=><Quiz quiz={quiz}/>} />
        <Route path="/quizzes" component={()=><Quizzes setQuiz={setQuiz}/>} />
        <Route path="/course" component={()=><Course/>} />
      </Router>
    </div>
  );
}

export default App;


const HeaderMargin = () => {
  return(
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </>
  );
}

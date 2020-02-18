  
import React, { useEffect, useState } from 'react';
import './style/App.scss';
import Quiz from './Quiz';
import Header from './Header';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
function App() {

  //courses
    //chapters
      //topics
  //quizzes
    //midterms
    //exams
  //questions
    //random
    //by topic
    //by chapter

  return (
    <div className="App">
      <Router>
        <Header/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Route path="/quiz/" component={Quiz} />
      </Router>
    </div>
  );
}

export default App;

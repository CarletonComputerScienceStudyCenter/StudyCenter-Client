  
import React, { useEffect, useState } from 'react';
import './style/App.scss';
import Quiz from './pages/quiz';
import Home from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer'
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  let [trigger, setTrigger] = useState(false);

    useEffect(() => {
      if(trigger){
        //setTrigger(false);
        //window.location.href = process.env.PUBLIC_URL+"/#/quiz?arrive=true";
        //console.log("triggered")
      }

    },[trigger]);

  return (
    <div className="App">
      <Router>
        <Header/>
        <HeaderMargin/>
        <Route exact path="/" component={()=><Home trigger={trigger} setTrigger={setTrigger}/>} />
        <Route path="/quiz" component={()=><Quiz trigger={trigger} setTrigger={setTrigger}/>} />
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

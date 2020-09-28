
import React from 'react';
import Footer from '../components/Footer'
import CourseTile from '../components/course/CourseTile'
import { Link } from "react-router-dom";
import '../style/about.scss';
import '../style/course.scss';

const about = (props) => {

  return(
    <>
    <div className="about-page">
        <p>This website is based off the original COMP 1805 <a href="http://cglab.ca/~discmath/about.html">Discrete Mathematics Study Center</a> course site.</p>
        <p>This website and its content were created by <a href="https://github.com/AlexaDeGrandmont">Alexa De Grandmont</a>, <a href="https://github.com/MathyouMB">Matthew MacRae - Bovell</a>, and <a href="https://github.com/AngelOnFira">Forest Anderson</a> using resources provided by <a href="https://cglab.ca/~morin/">Pat Morin</a> and <a href="http://people.scs.carleton.ca/~michiel/">Michiel Smid</a>.</p>
        <br></br>
        <Link to="/course" onClick={()=>{window.scrollTo(0,0)}}><div className="courses-grid-card-button">Back</div></Link>
    </div>
    <Footer/>
   </>
  );
}

export default about
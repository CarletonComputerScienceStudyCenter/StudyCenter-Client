
import React from 'react';
import Footer from '../components/Footer'
import CourseTile from '../components/course/CourseTile'
import { Link } from "react-router-dom";
import '../style/course.scss';

const course = (props) => {
  
    const redirect = () => {
        window.location.href = process.env.PUBLIC_URL+"/#/quiz?arrive=true";
    }
  
  return(
  <div className="course-page">
      <div className="course-page-tile-grid">
         <CourseTile tile={"Lectures"} icon={0}/>
          <span onClick={redirect}><CourseTile tile={"Practice"} icon={1}/></span>
          <a href="https://cglab.ca/~morin/teaching/2804/resources/DiscreteStructures.pdf"><CourseTile tile={"Textbook"} icon={2}/></a>
          <Link to="/" onClick={()=>{window.scrollTo(0,0)}}><CourseTile tile={"Back"} icon={3}/></Link>
      </div>
    <Footer/>
  </div>
  );
}

export default course

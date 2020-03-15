//import PageHead from '../components/PageHead'
import React from 'react';
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import '../style/home.scss';

const Home = (props) => {
    const redirect = () => {
      props.setTrigger(true);
    }

  return(
  <div className="container">
    <main>
      <h1 className="title">
        Computer Science Study Center
      </h1>

      <p className="description">
        <code>Beta 0.1.0</code>
      </p>

      <div className="courses-grid">
        <div className="courses-grid-card-closed">
          <div className="courses-grid-card-code">COMP 1805</div>
          <div className="courses-grid-card-title">Discrete Structures I</div>
          <div className="courses-grid-card-description">Introduction to discrete mathematics and discrete structures. Topics include: propositional logic, predicate calculus, set theory, complexity of algorithms, mathematical reasoning and proof techniques, recurrences, induction, finite automata and graph theory. Material is illustrated through examples from computing.</div>
          <div className="courses-grid-card-button-closed">Coming Soon</div>
        </div>
        <div className="courses-grid-card">
          <div className="courses-grid-card-code">COMP 2804</div>
          <div className="courses-grid-card-title">Discrete Structures II</div>
          <div className="courses-grid-card-description">A second course in discrete mathematics and discrete structures. Topics include: counting, sequences and sums, discrete probability, basic statistics, recurrence relations, randomized algorithms. Material is illustrated through examples from computing.</div>
          <div className="courses-grid-card-button" onClick={redirect}>Enter</div>
        </div>
      </div>

    </main>
    <Footer/>
    
  </div>
  );
}

export default Home

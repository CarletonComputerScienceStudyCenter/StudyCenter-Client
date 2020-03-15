
import React from 'react';
import { Link } from "react-router-dom";

const QuizHeader = (props) => (
    <div className="quiz-header">
        <div className="quiz-header-title">{props.quiz.title}</div>
        <div>{props.quiz.course.code} - {props.quiz.course.title}</div>
        {props.submitted&&
            <>
            <div className="quiz-header-score">Score: {props.mark} / {props.quiz.questions.length}</div>
            </>
        }
         <Link to="/" onClick={()=>{props.setLoading(true)}}><div className="quiz-header-return">Return</div></Link>
    </div>
)

export default QuizHeader

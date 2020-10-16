
  
import React, { useEffect, useState } from 'react';
import QuizHeader from './QuizHeader'
import Question from './Question'
import ScriptTag from 'react-script-tag';

const Quiz = (props) => {
    let questionNum = 0 
    return(
        <div className="quiz">
            <QuizHeader mark={props.mark} setLoading={props.setLoading} submitted={props.submitted} quiz={props.quiz}/>
            {
                /*for (let i=0; i<props.quiz.questions; i++){
                    <Question question={item} quizAnswers={props.quizAnswers} key={"question"+item.id} selectAnswer={props.selectAnswer} submitted={props.submitted}/>
                }
                */
                props.quiz.questions.map( item => (
                    <>
                        <span style={{"display":"none"}}>{questionNum +=1}</span>
                        <Question question={item} questionNum={questionNum} quizAnswers={props.quizAnswers} key={"question"+item.id} selectAnswer={props.selectAnswer} submitted={props.submitted}/>
                    </>
                ))
            }
        </div>
    );
}

export default Quiz

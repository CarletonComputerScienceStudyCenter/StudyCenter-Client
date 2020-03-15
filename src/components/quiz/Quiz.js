
import React from 'react';
import QuizHeader from './QuizHeader'
import Question from './Question'

const Quiz = (props) => (
    <div className="quiz">
        <QuizHeader mark={props.mark} setLoading={props.setLoading} submitted={props.submitted} quiz={props.quiz}/>
        {
            props.quiz.questions.map( item => (

                <Question question={item} quizAnswers={props.quizAnswers} key={"question"+item.id} selectAnswer={props.selectAnswer} submitted={props.submitted}/>

            ))
        }
    </div>
)

export default Quiz

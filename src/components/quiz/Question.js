import React from 'react';
import { useEffect, useState} from 'react'
import MathJax from 'react-mathjax-preview'
import Answer from './Answer'
import ScriptTag from 'react-script-tag';

const Question = (props) => {
    let [answers,setAnswers] = useState([]);
    let [loading, setLoading] = useState(false);

    const configureAnswers = () =>{
        let a = [];
        let correct = false;
        for(let i = 0; i < props.question.answers.length; i++) {
            
            let letter = 'null';

            if(i == 0){
                letter = '(a)';
            }else if(i == 1){
                letter = '(b)';
            }else if(i == 2){
                letter = '(c)'
            }else if(i == 3){
                letter = '(d)'
            }

            let selected = false;
            
            if(props.quizAnswers[props.question.id] == props.question.answers[i].id){
                selected = true;
                if(props.submitted){
                    if(props.quizAnswers[props.question.id] == props.question.correctAnswer.id){
                        correct = true;
                    }
                }
            }
            
            a.push(
                <Answer letter={letter} setLoading={setLoading} selected={selected} answer={props.question.answers[i]}  correctAnswer={props.question.correctAnswer} currentAnswer={props.quizAnswers[props.question.id]} key={"answer"+props.question.answers[i].id} questionId={props.question.id} selectAnswer={props.selectAnswer} correct={correct} submitted={props.submitted}/>
            );   
        }
        setAnswers(a);
        setLoading(true);
    }

    useEffect(() => {
        if(!loading){
            configureAnswers();
        }

    })
    useEffect(() => {
        console.log(props.question.pseudocode)
        if(props.submitted){
            configureAnswers();
        }

    },[props.submitted])

    return(
    <div className="quiz-question">
        <hr></hr>
        <div className="quiz-question-body"><MathJax math={props.question.body}/></div>
        { props.question.pseudocode.length > 5 &&
            <div className="quiz-question-image"><img className="quiz-question-image-image" src={process.env.PUBLIC_URL+"/2804_midterm_pseudocode/"+props.question.pseudocode}></img></div>
        }
        <div className="quiz-question-answers">
            {answers}
        </div>
    </div>
    )
}

export default Question

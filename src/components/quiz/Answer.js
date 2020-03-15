import React from 'react';
import { useEffect, useState} from 'react'
import MathJax from 'react-mathjax-preview'

const Answer = (props) => {
    
    let [selectedStyle, setStyle] = useState({});

    useEffect(() => {
        selectedStyle = {};
    if(props.selected){
        selectedStyle ={
            "backgroundColor": "#9eeaff"
        }
    }else{    
        selectedStyle ={
            ":hover": {
                "backgroundColor": "rgba(127, 219, 255, 0.185)",
              }
        }
       
    }

    if(props.submitted){
        if (props.selected){
            if(props.correct){
                selectedStyle ={
                    "backgroundColor": "#76ff76"
                } 
            }else{
                selectedStyle ={
                    "backgroundColor": "#ff6161"
                } 
            }
        }else{

            if(props.answer.id == props.correctAnswer.id){
                selectedStyle ={
                    "backgroundColor": "#c2ffd2"
                } 
            }
        }
    }

    setStyle(selectedStyle);
    },[props]);
    
    return(
    <div style={selectedStyle} className="quiz-question-answer" onClick={()=>{props.selectAnswer(props.questionId,props.answer.id); props.setLoading(false)}}>
        <span className="quiz-question-answer-letter">{props.letter}</span>
        <span className="quiz-question-answer-text"><MathJax math={props.answer.answer} /></span>
    </div>
    )
}

export default Answer

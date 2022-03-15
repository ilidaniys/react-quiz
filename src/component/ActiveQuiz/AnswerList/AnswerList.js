import React from 'react';
import './AnswerList.css'
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = (props) => {
    return (
        <ul className={'Answerlist'}>
            {props.answers.map((answer, index) =>{
                return(
                    <AnswerItem
                        state={props.state ? props.state[answer.id] : null}
                        key={index}
                        answer={answer}
                        onAnswerClick={props.onAnswerClick}
                    />
                )
            })}
        </ul>
    );
};

export default AnswerList;
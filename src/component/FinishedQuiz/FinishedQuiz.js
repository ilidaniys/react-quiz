import React from 'react';
import './FinishedQuiz.css'
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {


    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'Success') {
            total++
        }
        return total
    }, 0)

    const successFinder = (quiz) => {
        let resultsIcon = null
        if (props.results[quiz.id] === 'Error') {
            return resultsIcon = <i className={'error'}>-</i>
        } else {
            return resultsIcon = <i className={'success'}>+</i>
        }
    }

    return (
        <div className={'FinishedQuiz'}>
            <ul>
                {props.quiz.map((quiz, index) => {
                    return (
                        <li key={index}>
                            <strong>
                                {index + 1}
                            </strong>. &nbsp;
                            {quiz.question}
                            {successFinder(quiz)}
                        </li>
                    )
                })}
            </ul>
            <p> Правильно {successCount} из {props.quiz.length}</p>
            <div>
                <Button onClick={props.onRetry} type={'primary'}>Повторить</Button>
                <Button  type={'SuccessBut'}>Перейти в список Тестов</Button>
            </div>
        </div>
    );
};

export default FinishedQuiz;
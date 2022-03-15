import React, {Component} from 'react';
import './Quiz.css'
import ActiveQuiz from "../../component/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {

    state = {
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо?',
                rightAnswer: 2,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Желтый', id: 4}
                ]
            },
            {
                id: 2,
                question: 'Какого цвета Земля?',
                rightAnswer: 4,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Коричневый', id: 4}
                ]
            }
        ]
    }

    onAnswerClickhanker = (answerId) => {

        const question = this.state.quiz[this.state.activeQuestion]

        if (answerId === question.rightAnswer) {
            this.setState({
                answerState: {[answerId]: 'Success'}
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished!')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)


        } else {
            this.setState({
                answerState: {[answerId]: `Error`}
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={'Quiz'}>

                <div className={'QuizWrapper'}>
                    <h1>Выполните все вопросы!</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickhanker}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        );
    }
}


export default Quiz;
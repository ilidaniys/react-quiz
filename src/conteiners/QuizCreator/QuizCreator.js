import React, {Component} from 'react';
import classes from './QuizCreator.module.css'
import Button from "../../component/UI/Button/Button";


class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls: {
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
        }
    }




    submitHandler = event =>{
        event.preventDefault()
    }

    addQuestionHandler = () =>{

    }

    creatQuizHandler = () =>{

    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>
                    <form onSubmit={this.submitHandler}>
                        <input type="text"/>
                        <hr/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>

                        <select name="" id=""/>

                        <Button
                        type={'primary'}
                        onClick={this.addQuestionHandler}
                        > Добавить вопрос</Button>
                        <Button
                            type={'success'}
                            onClick={this.creatQuizHandler}
                        > Создать тест</Button>
                    </form>


                </div>
            </div>
        );
    }
}

export default QuizCreator;
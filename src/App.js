import React, {Component} from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./conteiners/Quiz/Quiz";
import {Route, Routes} from "react-router-dom";
import QuizList from "./conteiners/QuizList/QuizList";
import QuizCreator from "./conteiners/QuizCreator/QuizCreator";
import Auth from "./conteiners/Auth/Auth";

class App extends Component {
    render() {
        return (
            <div>
            <Layout>
                <Routes>
                    <Route path='/auth' element={<Auth/>}/>
                    <Route path='/quiz-creator' element={<QuizCreator/>}/>
                    <Route path='/quiz/:id' element={<Quiz/>}/>
                    <Route path='/' element={<QuizList/>}/>
                </Routes>
            </Layout>
            </div>
        );
    }
}

export default App;

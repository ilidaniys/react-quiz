import React, {Component} from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./conteiners/Quiz/Quiz";
import classes from './Style.module.css'

class App extends Component {
    render() {
        return (
            <div>
            <Layout>
                <Quiz/>
            </Layout>
            </div>
        );
    }
}

export default App;

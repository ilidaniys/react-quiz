import React, {Component} from 'react';
import classes from './Draver.module.css'
import BackDrop from "../../UI/BackDrop/BackDrop";
import {NavLink} from "react-router-dom";

const link = [
    {to: '/', lable: 'Список', exact: true},
    {to: '/auth', lable: 'Авторизация', exact: false},
    {to: '/quiz-creator', lable: 'Создать тест', exact: false},
]



class Draver extends Component {

    clickHandler = () =>{
        this.props.onClose()
    }

    renderLinks() {
        return link.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >{link.lable}</NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Draver]
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
            </>
        );
    }
}

export default Draver;
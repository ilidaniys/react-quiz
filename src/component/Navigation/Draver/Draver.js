import React, {Component} from 'react';
import classes from './Draver.module.css'

const link = [
    1, 2, 3
]



class Draver extends Component {
renderLinks() {
    return link.map((link, index) =>{
        return(
            <li key={index}>
                <a>Link: {link}</a>
            </li>
        )
    })
}

    render() {
    const cls =[classes.Draver]
        if (!this.props.isOpen){
            cls.push(classes.close)
        }
        return (
            <nav className={cls.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
};

export default Draver;
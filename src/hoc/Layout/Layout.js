import React, {Component} from 'react';
import './Layout.css' ;
import MenuToggle from "../../component/Navigation/MenuToggle/MenuToggle";
import Draver from "../../component/Navigation/Draver/Draver";

class Layout extends Component {

    state ={
        manu: false
    }

    toggleMenuHandler = () =>{
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return(
            <div className={'Layout'}>
                <Draver
                    isOpen={this.state.menu}
                />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}


export default Layout;
import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Task5.css';
import {red,blue,pink,green,violet,white} from '../Actions/Task5Action';

class Task5 extends Component {
    render() {
        return (
            <div className={this.props.bgcolor}>
                <h1>Hello world</h1>
                <button onClick={this.props.red} onMouseOver={this.props.blue} onDoubleClick={this.props.white}>Red</button>
                <button onClick={this.props.blue} onMouseOver={this.props.pink} onDoubleClick={this.props.white}>Blue</button>
                <button onClick={this.props.pink} onMouseOver={this.props.green}onDoubleClick={this.props.white}>Pink</button>
                <button onClick={this.props.green} onMouseOver={this.props.violet}onDoubleClick={this.props.white}>green</button>
                <button onClick={this.props.violet} onMouseOver={this.props.red}onDoubleClick={this.props.white}>violet</button>
                
            </div>
        );
    }
}


const mapStoreToProps=(state)=>{
    const{bgcolor}=state.Task5Reducer;
    return {bgcolor};
    }
    export default connect(mapStoreToProps,{red,blue,pink,green,violet,white})(Task5);
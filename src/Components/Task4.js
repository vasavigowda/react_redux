import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment,decrement,evnnumincrement} from '../Actions/Task4Action';

class Task4 extends Component {
    render() {
        return (
            <div>
                Number:{this.props.Num}
                <div>
                    <button onClick={this.props.increment}>+</button>
                    <button onClick={this.props.decrement}>-</button>
                    <button onClick={this.props.evnnumincrement}>If num even,increment</button>
                </div>
                
            </div>
        );
    }
}

const mapStoreToProps=(state)=>{
const{Num}=state.Task4Reducer1;
return {Num};
}
export default connect(mapStoreToProps,{increment,decrement,evnnumincrement})(Task4);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateA,updateB} from '../Actions/Task2Action';

class Task2 extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                    <td>A:{this.props.A}</td>
                    <td>B:{this.props.B}</td>
                </tr>
                <tr>
               <td> <button onClick={()=>this.props.updateA(this.props.B)}>Update A</button></td>
                <td><button onClick={()=>this.props.updateB(this.props.A)}>Update B</button></td>
                </tr>
                </table>
               
            </div>
        );
    }
}
const mapStoreToProps=(state)=>{
    const{A}=state.Task2Reducer1;
    const{B}=state.Task2Reducer2;
    return {A,B};

}

export default connect(mapStoreToProps,{updateA,updateB})(Task2);
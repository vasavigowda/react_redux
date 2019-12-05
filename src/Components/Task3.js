import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Task3.css';
import {updateA,updateB,updateC,updateD} from '../Actions/Task3Action';

class Task3 extends Component {
    render() {
        return (
         
              
                <div className="container">
              
                <div> A:{this.props.A}</div>
                <div> B:{this.props.B}</div>
               <div>  C:{this.props.C}</div>
                <div> D:{this.props.D}</div>
                
            
           
                
               <div><button onClick={()=>this.props.updateA(this.props.C)}>Update A</button></div>
               <div><button onClick={()=>this.props.updateB(this.props.D)}>Update B</button></div>
               <div> <button onClick={()=>this.props.updateC(this.props.A)}>Update C</button></div>
                <div><button onClick={()=>this.props.updateD(this.props.B)}>Update D</button></div>
             </div>
            
              
           
        );
    }
}
const mapStoreToProps=(state)=>{
    const{A}=state.Task3Reducer1;
    const{B}=state.Task3Reducer2;
    const{C}=state.Task3Reducer3;
    const{D}=state.Task3Reducer4;
    return {A,B,C,D};

}

export default connect(mapStoreToProps,{updateA,updateB,updateC,updateD})(Task3);
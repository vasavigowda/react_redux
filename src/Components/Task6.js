import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleChange,check} from '../Actions/Task6Action';

class Task6 extends Component {   
  render() {
    return (
      <div>
         <input type="number" name='number1' placeholder="First operand" onChange={this.props.handleChange}/>
          <select name='operator' onChange={this.props.handleChange}> 
            <option>oprator</option>
            <option >+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
          </select>
            <input type="number" placeholder="Second operand" name='number2' onChange={this.props.handleChange}/>
            <input type="number" placeholder="Result" name='result' onChange={this.props.handleChange}/>=  
            <button onClick={this.props.check}>Check</button>
            <h1>{this.props.number1}</h1>
            <h1>{this.props.operator}</h1>
            <h1>{this.props.number2}</h1>
            <h1>{this.props.result}</h1>  
            <h1>{this.props.msg}</h1>  
            </div>
        );
    }
}

const mapStoreToProps=(state)=>{
  const{number1,number2,operator,result,msg}=state.Task6Reducer;
  return {number1,number2,operator,result,msg};
  }

  // const mapDispatchToProps=(dispatch)=>{
  // return{
  //   handleChange:(event)=>dispatch({type:"SEND",payload:event.target}),
  //  check:()=>dispatch({type:"CHECK"})
  // }
  // };
  export default connect(mapStoreToProps,{handleChange,check})(Task6);
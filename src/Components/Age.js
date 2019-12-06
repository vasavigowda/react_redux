import React, { Component } from 'react';
import { connect } from "react-redux";
// import Reducer from '../Store/Reducer';
import {onAgeUp,onAgeDown} from '../Actions/Task1Action'

class Age extends Component {
render() {
    return (
        <div>
        <div>
            your age: <span>{this.props.age}</span>
        </div>
            <button onClick={this.props.onAgeUp}>Age UP</button>
            <button onClick={this.props.onAgeDown}>Age Down</button>
        </div>
        );
    };
}

// const mapDispachToProps = (dispatch) => {
//     return {
//         onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
//         onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
//     };
// };

const mapStateToProps = (state) => {
    const age=state.Reducer
    return {age};
};


export default connect(mapStateToProps,{onAgeUp,onAgeDown})(Age);
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { add } from '../actions'

class StrAddButton extends Component {
    render() {
        return (
            <div>
                {/* <input value='Add200' type="button" onClick={this.addString}/> */}
                <input value= 'Add200' type = "button" onClick={this.props.addString}/>
            </div>
        );
    }

    // addString = () => {
    //     this.props.store.dispatch(add());
    // }
}

let mapDispatchToProps = (dispatch, props) => {
    console.log(`Props from App.js : ${props.AddProp}`)
    return {
        addString: () => dispatch(add())
    };
};

StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);

export default StrAddButton;
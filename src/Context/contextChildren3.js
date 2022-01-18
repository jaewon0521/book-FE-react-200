import React, { Component } from 'react';
import { Consumer } from './R077_ContextApi'

class contextChildren3 extends Component {
    render() {
        return (
            <Consumer>
                {contextValue =>
                    <button onClick={e => contextValue.setStateFunc("react200")}>
                        {contextValue.name}_button
                    </button>}
           </Consumer>
        );
    }
}

export default contextChildren3;
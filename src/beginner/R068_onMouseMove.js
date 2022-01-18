import React, { Component } from 'react';

class R068_onMouseMove extends Component {
    MouseMove(tag) {
        console.log('TAG : ' + tag);
    }

    render() {
        return (
            <div>
                <div onMouseMove={e => this.MouseMove("div")}>
                    <h3>DIV onMouseMove</h3>
                </div>
                <input type = "text" onMouseMove={e => this.MouseMove("input")}/>
                <select onMouseMove={e => this.MouseMove("select")}>
                    <option value ="react">react</option>
                    <option value ="200">200</option>
                </select>
            </div>
        );
    }
}

export default R068_onMouseMove;
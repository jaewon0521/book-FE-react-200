import React, { Component } from 'react';

export default function withHocComponent(InComponent, InComponentName) {
    return class OutComponent extends Component {
        componentDidMount() {
            console.log(`3 InComponent : ${InComponent}`);
        }

        render() {
            console.log('1. InComponent render');
            return (
                <InComponent{...this.props}/>
            );
        }
    }
}
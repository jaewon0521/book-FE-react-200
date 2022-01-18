import React, { Component } from 'react';

class R64_Promise extends Component {
    componentDidMount() {
        new Promise(resolve => {
            setTimeout(function () {
                resolve('react');
            }, 1500);
        })
            .then(function (result) {
                console.log(result);
                return result + 200;
            })
            .then(result => {
                console.log(result);
        })
    }
    render() {
        return (
            <div>
                <h1>Promise</h1>
            </div>
        );
    }
}

export default R64_Promise;
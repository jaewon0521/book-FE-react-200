import React, { Component } from 'react';
import axios from "axios";

class R61_AxiosGet extends Component {
    componentDidMount() {
        axios.get('http://date.jsontest.com/')
        .then(response => { alert(response.data.date) });
    }
    render() {
        return (
            <div>
                <h1>axios get</h1>
            </div>
        );
    }
}

export default R61_AxiosGet;
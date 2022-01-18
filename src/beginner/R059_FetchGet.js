import React, { Component } from 'react';
import Swal from 'sweetalert2';

class R059_FetchGet extends Component {
    componentDidMount = async () => {
        const response = await fetch('http://date.jsontest.com/');
        const body = await response.json();
        // alert(body.date);
        Swal.fire(body.date).then(result => { alert(body) });
        }
    
    render() {
        return (
            <div>
                <h1>fetch get</h1>
            </div>
        );
    }
}

export default R059_FetchGet;
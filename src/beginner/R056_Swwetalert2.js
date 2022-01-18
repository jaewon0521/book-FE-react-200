import React, { Component } from 'react';
import Swal from 'sweetalert2'

class R056_Swwetalert2 extends Component {
    componentDidMount() {
        // Swal.fire('1. SweetAlert')
        // alert('2. alert()')
        Swal.fire('1. SweetAlert').then(result => {alert('2. result.value : '+result.value)})
    }
    render() {
        return (
            <div>
                <h1>Sweetalert2</h1>
            </div>
        );
    }
}

export default R056_Swwetalert2;
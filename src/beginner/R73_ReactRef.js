import React, { Component } from 'react';

class R73_ReactRef extends Component {
    constructor(props) {
        super(props);
        this.InputRef = React.createRef();
    }

    RefFocus = (e) => {
        this.InputRef.current.focus();
    }
    JavascriptFocus() {
        document.getElementById('id').focus();
    }

    render() {
        return (
            <div>
                <input id="id" type="text" ref={this.InputRef} />
                <input type="button" value="Ref Focus" onClick={this.RefFocus} />
                <input type="button" value="Javascript Focus" onClick={this.JavascriptFocus} />
            </div>
        );
    }
}

export default R73_ReactRef;
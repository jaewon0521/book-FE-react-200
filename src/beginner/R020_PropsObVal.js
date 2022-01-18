import React, { Component } from 'react';
import datatype from 'prop-types';

class R020_PropsObVal extends Component {
    render() {
        let {
            ObjectJson
        } = this.props
        return (
            <div style={{ padding: "0px" }}>
                {JSON.stringify(ObjectJson)}
            </div>
        )
    }
}

R020_PropsObVal.propTypes = {
    ObjectJson: datatype.shape({
        react: datatype.string,
        twohundred: datatype.number
    })
}

export default R020_PropsObVal;
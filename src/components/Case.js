import React from 'react';
import "../App.css";

class Case extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="rounded" style={{backgroundColor: this.props.color}}></div>
        );
    }
}


export default Case;
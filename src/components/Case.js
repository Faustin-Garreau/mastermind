import React from 'react';
import "../App.css";

class Case extends React.Component {

    render() {
        return (
            <div className="rounded" onClick={() => this.props.colorSelect ? this.props.colorSelect(this.props.color) : null} style={{backgroundColor: this.props.color}}></div>
        );
    }
}


export default Case;
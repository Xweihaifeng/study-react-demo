import React from 'react';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    isClickDel(e) {
        this.props.isDelete(this.props.index);
    }

    render() {
        return (
            <li>
                { this.props.content}
                {<span onClick={this.isClickDel.bind(this, this.props.index)}>&times;</span>}
            </li>
        )
    }
}
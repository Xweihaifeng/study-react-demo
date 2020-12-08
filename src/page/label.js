import React from 'react';
export default class Label extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    isClickDel(e) {
        console.log(e);
    }
    render() {
        return (
            <section>
                Label
            </section>
        )
    }
}
import React from 'react';
export default class Select extends React.Component {
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
                Select
            </section>
        )
    }
}
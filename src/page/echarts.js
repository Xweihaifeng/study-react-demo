import React from 'react';
export default class Echarts extends React.Component {
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
                Echarts
            </section>
        )
    }
}
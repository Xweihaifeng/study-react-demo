import React from 'react';

var myStyle = { color: 'red', textAlign: 'center' }
class Navmenu extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <ul>
                <li>全景展示</li>
                <li>高校防控</li>
                <li>应急指挥</li>
                <li>交通运行</li>
                <li>系统运营</li>
            </ul>
        );
    }
}
class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return <h1>Hello World!</h1>;
    }
}
class Headers extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <section style={myStyle}>
                <header>
                    <Navmenu />
                    <Welcome />
                </header>
            </section>
        );
    }
}
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    isClickDel(e) {
        console.log(e);
    }
    render() {
        return <Headers />
    }
}
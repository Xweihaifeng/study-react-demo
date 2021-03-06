import React from 'react';
import {
    // eslint-disable-next-line no-unused-vars
    BrowserRouter as Router,Route,HashRouter,Link
} from 'react-router-dom';
import { Button, DatePicker, version } from "antd";
import ercode from '../img/pub_menu_hov_l.png';

class Home extends React.Component {
    render() {
        return (
            <section> Home </section>
        );
    }
}

class Pages extends React.Component {
    render() {
        return (
            <div>
                <h1>antd version: {version}</h1>
                <DatePicker />
                <Button type="primary" style={{ marginLeft: 8 }}>Primary Button</Button>
            </div>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <section>
                <Route path="/:id" component={Pages} />
            </section>
        );
    }
}

class Menu extends React.Component {
    render() {
        return (
            <aside>
                <div className={'nav-left'}>
                    <img src={ercode} className="App-ercode" alt="ercode" />
                </div>
                <ul className={'nav-center'}>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/about">关于</Link></li>
                    <li><Link to="/content">Content</Link></li>
                </ul>
                <div className={'nav-right'}>Admin</div>
            </aside>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <section>
                <h3> ID: {this.props.match.params.id}</h3>
                <h5>match.url: {this.props.match.url}</h5>
            </section>
        );
    }
}

class Address extends React.Component {
    render() {
        return (
            <aside>
                <div className={'foot-left'}>
                    <img src={ercode} className="App-ercode" alt="ercode" />
                </div>
                <ul className={'foot-center'}>
                    <li>百度</li>
                    <li>搜狐</li>
                    <li>谷歌</li>
                </ul>
                <div className={'foot-right'}>
                    <img src={ercode} className="App-ercode" alt="ercode" />
                </div>
            </aside>
        );
    }
}

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    isClickDel(e) {
        console.log(e);
    }
    render() {
        return (
            <HashRouter>
                <header id={'Header'}>
                    <Route path="/" component={Menu} />
                </header>
                <article id={'Content'}>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/:id" component={Content} />
                </article>
                <footer id={'Footer'}>
                    <Route path="/" component={Address} />
                </footer>
            </HashRouter>
        )
    }
}
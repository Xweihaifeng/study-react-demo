import React from 'react';
import {
    // eslint-disable-next-line no-unused-vars
    BrowserRouter as Router,
    Route,
    HashRouter,
    Link
} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (<div>
            Home
        </div>);
    }
}

class About extends React.Component {
    render() {
        return (
            <div>About</div>
        );
    }
}

class Menu extends React.Component {
    render() {
        return (
            <aside>
                <div className={'nav-left'}>Logo</div>
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
            <div>
                <h3> ID: {this.props.match.params.id}</h3>
                <h5>match.url: {this.props.match.url}</h5>
            </div>
        );
    }
}

class Headers extends React.Component {
    render() {
        return (
            <HashRouter>
                <header id={'Header'}>
                    <Route path="/" component={Menu} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/:id" component={Content} />
                </header>
            </HashRouter>
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
        return <Headers />
    }
}
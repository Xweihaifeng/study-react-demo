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
        return (
            <section> Home </section>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <section>About</section>
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
                <div className={'foot-left'}>Logo</div>
                <ul className={'foot-center'}>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/about">关于</Link></li>
                    <li><Link to="/content">Content</Link></li>
                </ul>
                <div className={'foot-right'}>Admin</div>
            </aside>
        );
    }
}

class Headers extends React.Component {
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
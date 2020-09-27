import React from 'react';
import Nav from './Nav'
import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                'zhangsan',
                'lisi',
                'wangwu'
            ],
            inputVal: ''
        }
    }

    isClick() {
        this.setState({
            list: [...this.state.list, this.state.inputVal],
            inputVal: ''
        })
    }

    isInput(e) {
        this.setState({
            inputVal: e.target.value
        })
    }

    isClickDel(e) {
        const list = [...this.state.list];
        list.splice(e, 1);
        this.setState({ list })
    }

    render() {
        return (
            <div className="Main">
                <input onChange={this.isInput.bind(this)} value={this.state.inputVal} />
                <button onClick={this.isClick.bind(this)}>添加</button>
                <div>
                    <ul className="Nav">
                        {
                            this.state.list.map((v, k) => <Nav isDelete={this.isClickDel.bind(this)} content={v} key={k} index={k} />)
                        }
                    </ul>
                    <ul className="Nav">
                        {
                            this.state.list.map((v, k) => <li key={k}>{v} <span onClick={this.isClickDel.bind(this, k)}>&times;</span></li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
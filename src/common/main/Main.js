import React from 'react';
import './Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                'zhangsan',
                'lisi',
                'wangwu'
            ]
        }
    }

    isClick() {
        this.setState({
            list: [...this.state.list, 'hello world!']
        })
    }

    render() {
        return (
            <div className="Main">
                <input />
                <button onClick={ this.isClick.bind(this) }>添加</button>
                <ul>
                    {
                        this.state.list.map((v,k) => <li key={k}>{v}</li>)
                    }
                </ul>
            </div>
        )
    };
}

export default Main;
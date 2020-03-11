import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { spy } from 'mobx';
import { Table } from 'antd';
import './index.less';
@inject('counterStore')
@observer
class Index extends Component {
    constructor(props) {
        super(props);
    }
var aaa = 456;

    render() {
        const { counterStore: { obj }, counterStore } = this.props;
        return (
            <section className="counter">
                <button onClick={() => counterStore.add()}>+</button>
                <span>count is: {obj.count}</span>
                <button onClick={() => counterStore.reduce()}>-</button>
            </section>
        );
    }
}

export default Index;
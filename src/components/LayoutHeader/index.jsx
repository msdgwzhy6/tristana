import React, { Component } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import './index.less';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={false}>
                退出
            </a>
        </Menu.Item>
    </Menu>
);

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section styleName="layoutHeader">
                <div styleName="headeLeft">
                    订单系统
                </div>
                <div styleName="headerRight">
                    <span styleName="message">消息</span>
                    <Dropdown styleName="dropDown" overlay={menu}>
                        <div>
                            <Avatar styleName="avatar" size={28} icon="user" />
                            <span styleName="name">Faker</span>
                        </div>
                    </Dropdown>
                </div>
            </section>
        );
    }
}

export default Index;

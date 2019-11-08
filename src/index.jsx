import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { Provider } from 'mobx-react';
import { Switch, Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import Home from '../src/pages/Home/index';
import Stores from './mobx/rootStore';
const history = createHashHistory();

ReactDOM.render(
    <ConfigProvider locale={zh_CN}>
        <Provider {...Stores}>
            <Router history={history}>
                <Switch>
                    <Home />
                </Switch>
            </Router>
        </Provider>
    </ConfigProvider>,
    document.getElementById('root'),
);

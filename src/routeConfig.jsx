// 路由配置文件
import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Dashboard = lazy(() => import(/* webpackChunkName: "Dashboard"*/'./pages/Dashboard/index'));
const AddGoods = lazy(() => import(/* webpackChunkName: "AddGoods"*/'./pages/AddGoods/index'));
const Counter = lazy(() => import(/* webpackChunkName: "Counter"*/'./pages/Counter/index'));
const routes = [
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/add/goods',
        component: AddGoods
    },
    {
        path: '/counter',
        component: Counter
    }
];

const RouteWithSubRoutes = route => (
    <Route
        exact
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);

const routeConfig = routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
export default routeConfig;

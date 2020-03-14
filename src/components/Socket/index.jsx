/* eslint-disable no-undef */
/*
 * Socket集成
 * @Author: Jiang
 * @Date: 2019-08-27 18:00:15
 * @Last Modified by: Jiang
 * @Last Modified time: 2020-03-12 10:27:22
 */
import io from 'socket.io-client';
import { message } from 'antd';
import { SOCKET_URL } from '../../config';

let SOCKET = '', USER = '';

// 坐席登录
const agentOnline = () => {
    if(sessionStorage.user) {
        USER = JSON.parse(sessionStorage.user);
        SOCKET = io(SOCKET_URL);
        SOCKET.emit('agentOnline', { loginName: USER.loginName });
    }
};

// 坐席下线
const agentOffline = () => {
    if(sessionStorage.user) {
        USER = JSON.parse(sessionStorage.user);
        SOCKET.emit('agentOffline', { loginName: USER.loginName });
    }
};

// 服务器断开链接
const serverDisconnect = () => {
    if(!SOCKET) {
        return;
    }
    SOCKET.on('disconnect');
};

// 断开链接
const disconnect = () => {
    if(!SOCKET) {
        return;
    }
    SOCKET.disconnect();
};

const offConnect = () => {
    if(!SOCKET) {
        return;
    }
    SOCKET.off('connect');
};

const onConnect = () => {
    if(!SOCKET) {
        return;
    }
    SOCKET.on('connect', () => {
        USER = JSON.parse(sessionStorage.user);
        SOCKET.emit('agentOnline', { loginName: USER.loginName });
    });
};

// 移出所有监听
const removeAllListeners = () => {
    if(!SOCKET) {
        return;
    }
    SOCKET.removeAllListeners();
};

// 视频呼叫请求
const serviceRequestsUpdated = (fn) => {
    if(!SOCKET) {
        return;
    }
    SOCKET.on('serviceRequestsUpdated', (msg) => {
        fn('serviceRequestsUpdated', msg);
    });
};

// 结束呼叫请求
const clientEndedSession = (fn) => {
    if(!SOCKET) {
        return;
    }
    SOCKET.on('clientEndedSession', (msg) => {
        fn('clientEndedSession', msg);
    });
};

// 坐席被踢出
const agentExpired = (fn) => {
    if(!SOCKET) {
        return;
    }
    SOCKET.on('agentExpired', (loginName) => {
        if(USER.loginName == loginName) {
            message.info('您已被强制下线，如有问题，请联系管理员');
            fn('loginOut', true);           
        }
    });
};

export {
    agentOnline,
    agentOffline,
    disconnect,
    serverDisconnect,
    offConnect,
    onConnect,
    removeAllListeners,
    serviceRequestsUpdated,
    clientEndedSession,
    agentExpired
};

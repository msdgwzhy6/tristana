# 预览地址
# https://order.downfuture.com/

# 特点
1. 路由完全匹配导航，包含url输入，js跳转。
```
componentDidMount() {
    const { location: { pathname } } = this.props;
    this.setState({
        selectedKeys: [pathname],
        pathname
    });
}

static getDerivedStateFromProps(props, state) {
    if(props.location.pathname != state.pathname) {
        return {
            pathname: props.location.pathname,
            selectedKeys: [props.location.pathname]
        };
    }
    return state;
}
```
2. 封装组件Loading，不需要重复写loading判断
```
import { action, observable } from 'mobx';

export default class BasicStore {
    @observable isLoading  = observable.map({ });
  
    @action
    changeLoadingStatus (loadingType, type) {
        this.isLoading.set(loadingType, type);
    }
}

// 初始化loading
export function initLoading(target, key, descriptor) {
    const oldValue = descriptor.value;

    descriptor.value = async function(...args) {
        this.changeLoadingStatus(key, true);
        let res;
        try {
            res = await oldValue.apply(this, args);
        } catch (error) {
            // 做一些错误上报之类的处理 
            throw error;
        } finally {
            this.changeLoadingStatus(key, false);
        }
        return res;
    };
    return descriptor;
}
```
# 环境
```
npm ^6.5.0
node ^11.4.0
```
# 启动
```
$ git clone https://github.com/xuya227939/react-scaffolding-mobx.git

$ cd react-scaffolding-mobx

$ npm install

$ npm start
```

# 部署
```
$ npm run build
```
然后会在script目录下生成dist目录

# 目录结构
<pre>
.
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── script                             # webpack
│   ├── webpack.base.conf.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── src
│   ├── components                     # 公共组件层
│   │   └── LayoutHeader
│   │       ├── index.jsx
│   │       └── index.less
│   ├── config.js                      # 基础配置
│   ├── index.jsx                      # 入口js
│   ├── mobx                           # mobx层
│   │   ├── AddGoods
│   │   │   └── store.js
│   │   ├── Dashboard
│   │   │   └── store.js
│   │   ├── basicStore.js
│   │   └── rootStore.js
│   ├── pages                          # 页面层
│   │   ├── AddGoods
│   │   │   ├── index.jsx
│   │   │   └── index.less
│   │   ├── Dashboard
│   │   │   ├── index.jsx
│   │   │   └── index.less
│   │   └── Home
│   │       ├── components
│   │       │   └── menu.jsx
│   │       ├── index.jsx
│   │       └── index.less
│   ├── request.jsx                    # 网络请求
│   ├── routeConfig.jsx                # 路由层
│   ├── servers                        # api层
│   │   └── table.js
│   └── utils                          # 工具类
│       └── index.js
├── stylelint.config.js
├── yarn-error.log
└── yarn.lock
</pre>
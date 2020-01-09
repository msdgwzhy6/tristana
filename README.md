# tristana

基于 [mobx](https://github.com/mobxjs/mobx)、[webpack](https://github.com/webpack/webpack) 和 [react-router](https://github.com/ReactTraining/react-router) 的轻量级前端框架。

---

## 特性
* **快速上手**，只要会react、mobx、webpack、react-router，快速搭建中后台管理平台。
* **路由匹配**，包含url输入、js跳转、菜单切换。
* **封装组件Loading**，不需要重复写组件Loading判断。
* **完全自定义的cli**，内置mobx、webpack、react-router、classnames、dayjs、eslint等。

## 例子
* [Order System](https://order.downfuture.com/): 简单的订单系统

### 是否可用于生产环境？
当然！公司内用于生产环境的项目估计已经有 5+ 。

### 是否支持 IE8 ？
不支持。

## 启动
```
$ git clone https://github.com/Cherry-Team/tristana.git

$ cd tristana

$ npm install

$ npm start
```

## 部署
```
$ npm run build
```

# 推荐的目录结构
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

## License

[MIT](https://tldrlegal.com/license/mit-license)
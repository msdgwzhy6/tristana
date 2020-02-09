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
* [Count](https://order.downfuture.com/#/counter): 简单计数器

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

## License

[MIT](https://tldrlegal.com/license/mit-license)

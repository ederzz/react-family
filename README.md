### 简介
该项目技术栈为react全家桶 + echarts，其他的一些工作中经常使用的库有空也会添加进来~~
> 目前主要作为一个xss漏洞检测器的前台页面，后面会加入一些其他的东西，持续完善中~~

### 项目启动
> 需要注意的是，`npm start`启动有使用`redux devtools`工具，你需要在`chrome`浏览器打开应用，且安装`redux devtools`工具

```shell
    git clone git@github.com:lightforme/react-family.git
    cd react-family
    npm install
    npm start
```

### 项目目录结构

```
    ├─config
    │  └─jest
    ├─public
    ├─scripts
    └─src
        ├─common                         ------通用文件
        ├─components                     ------木偶组件
        │  ├─EventFacts
        │  ├─MiniBarChart
        │  ├─MiniGuageChart
        │  ├─MiniLineChart
        │  ├─MiniPieChart
        │  ├─ScrollTable
        │  ├─SiderBar
        │  ├─SiteBar
        │  ├─Slider
        │  └─WeaknessItem
        ├─constants                      ------常量配置
        ├─containers                     ------智能组件
        │  ├─App
        │  ├─DataAnalysis
        │  ├─DataView
        │  ├─Home
        │  │  └─config
        │  ├─WeaknessList
        │  └─XssFinder
        ├─pages                          ------一级路由界面
        │  └─ChartsPage
        └─static                         ------静态资源
```
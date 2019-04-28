(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1198:function(n,e,o){},869:function(n,e,o){"use strict";o.r(e),o.d(e,"default",function(){return B});var r=o(17),t=o.n(r),a=o(18),c=o.n(a),i=o(19),s=o.n(i),l=o(44),d=o.n(l),u=o(20),m=o.n(u),N=o(14),f=o.n(N),p=o(891),B=(o(1198),function(n){function e(){var n,r;t()(this,e);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return r=c()(this,(n=s()(e)).call.apply(n,[this].concat(i))),f()(d()(r),"document",function(){return{document:o(922),className:"notice-bar-page"}}),r}return m()(e,n),e}(p.a))},922:function(n,e){n.exports="# NoticeBar 通告栏\n\n\n\n## 基本用法\n```jsx\nimport { NoticeBar, Icon } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <NoticeBar>普通</NoticeBar>\n        <NoticeBar theme=\"danger\">自定义主题</NoticeBar>\n        <NoticeBar icon={<Icon type=\"wrong-round\" />}>自定义图标</NoticeBar>\n        <NoticeBar scrollable>各位zarmer请注意，本组件使用了自动滚动功能，更多用法请参见使用文档。</NoticeBar>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 特定场景\n```jsx\nimport { NoticeBar  } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <NoticeBar hasArrow onClick={() => alert('click this notice!')}>链接样式的</NoticeBar>\n        <NoticeBar closable>可关闭的</NoticeBar>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | 'warning' | 主题，可选值 `default`、`primary`、`success`、`warning`、`danger` |\n| icon | ReactNode | - | 设置图标 |\n| scrollable | boolean | false | 是否开启自动滚动轮播 |\n| closable | boolean | false | 是否显示关闭按钮 |\n| hasArrow | boolean | false | 是否显示箭头 |\n| onClick | () => void | - | 点击后触发的回调函数 |\n"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{633:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return C});var o=t(17),r=t.n(o),i=t(18),a=t.n(i),l=t(19),c=t.n(l),s=t(44),d=t.n(s),m=t(20),p=t.n(m),u=t(14),h=t.n(u),C=function(n){function e(){var n,o;r()(this,e);for(var i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return o=a()(this,(n=c()(e)).call.apply(n,[this].concat(l))),h()(d()(o),"document",function(){return{document:t(908),className:"cell-page"}}),o}return p()(e,n),e}(t(885).a)},885:function(n,e,t){"use strict";t.d(e,"a",function(){return x});var o=t(17),r=t.n(o),i=t(21),a=t.n(i),l=t(18),c=t.n(l),s=t(19),d=t.n(s),m=t(20),p=t.n(m),u=t(1),h=t.n(u),C=t(888),g=t.n(C),v=t(889),f=t.n(v),x=(t(890),t(886),function(n){function e(){return r()(this,e),c()(this,d()(e).apply(this,arguments))}return p()(e,n),a()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var o=new g.a.Renderer;o.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'.concat(n,"</thead><tbody>").concat(e,"</tbody></table></div>")},o.code=function(n,e){var t=!(!e||!f.a.getLanguage(e))?f.a.highlight(e,n).value:n;return'<pre><code class="hljs '.concat(e,'">').concat(t,"</code></pre>")};var r=g()(e,{renderer:o});return h.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:r}})}return h.a.createElement("span",null)}}]),e}(u.Component))},886:function(n,e,t){},908:function(n,e){n.exports='# Cell 列表项\n\n\n\n## 基本用法\n```jsx\nimport { Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell title="标题文字" />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 带描述\n```jsx\nimport { Cell, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell title="标题文字" description="描述文字" />\n        <Cell title="标题文字" description={<Icon type="right" />} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 带图标、标题\n```jsx\nimport { Cell, Icon } from \'zarm\';\n\nconst img = \'https://static.zhongan.com/website/health/zarm/images/icons/state.png\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell title="标题文字" icon={<Icon type="right" />} />\n        <Cell title="标题文字" icon={<img alt="" src={img} style={{ width: 24, height: 24 }} />} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 带跳转\n```jsx\nimport { Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell title="标题文字" onClick={() => {}} />\n        <Cell title="标题文字" onClick={() => {}} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 带描述、箭头、跳转\n```jsx\nimport { Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell hasArrow title="标题文字" description="描述文字" onClick={() => {}} />\n        <Cell hasArrow title="标题文字" description="描述文字" onClick={() => {}} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 带图标、描述、箭头、跳转\n```jsx\nimport { Cell, Icon } from \'zarm\';\n\nconst img = \'https://static.zhongan.com/website/health/zarm/images/icons/state.png\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          hasArrow\n          title="标题文字"\n          description="描述文字"\n          icon={<Icon type="right" />}\n          onClick={() => {}}\n        />\n\n        <Cell \n          hasArrow\n          title="标题文字"\n          description="描述文字"\n          icon={\n            <img alt="" src={img} style={{ width: \'24px\', height: \'24px\' }} />\n          }\n          onClick={() => {}}\n        />\n\n        <Cell\n          hasArrow\n          title={\n            <div className="box">\n              <div className="box-title">标题文字</div>\n              <div className="box-description">描述文字</div>\n            </div>\n          }\n          description="附加提示"\n          icon={<img alt="" src={img} style={{ width: \'48px\', height: \'48px\' }} />}\n          onClick={() => {}}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 提示信息\n```jsx\nimport { Cell, Message, Icon, Input } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          title="标题"\n          help={<Message theme="danger" icon={<Icon type="info-round" />}>标题不能为空</Message>}\n        >\n          <Input type="text" placeholder="请输入标题" />\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| hasArrow | boolean | false | 是否显示箭头 |\n| icon | ReactNode | - | 设置图标 |\n| titile | ReactNode | - | 设置标题区域内容 |\n| description | ReactNode | - | 设置描述区域内容 |\n| help | ReactNode | - | 设置下方提示信息区域内容，通常配合 `Message` 组件使用 |\n| onClick | () => void | - | 点击后触发的回调函数 |\n'}}]);
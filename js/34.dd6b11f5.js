(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{655:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return v});var l=t(17),r=t.n(l),a=t(18),u=t.n(a),o=t(19),i=t.n(o),c=t(44),s=t.n(c),d=t(20),m=t.n(d),p=t(14),f=t.n(p),v=function(n){function e(){var n,l;r()(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return l=u()(this,(n=i()(e)).call.apply(n,[this].concat(o))),f()(s()(l),"document",function(){return{document:t(930),className:"slider-page"}}),l}return m()(e,n),e}(t(885).a)},885:function(n,e,t){"use strict";t.d(e,"a",function(){return C});var l=t(17),r=t.n(l),a=t(21),u=t.n(a),o=t(18),i=t.n(o),c=t(19),s=t.n(c),d=t(20),m=t.n(d),p=t(1),f=t.n(p),v=t(888),h=t.n(v),b=t(889),g=t.n(b),C=(t(890),t(886),function(n){function e(){return r()(this,e),i()(this,s()(e).apply(this,arguments))}return m()(e,n),u()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var l=new h.a.Renderer;l.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'.concat(n,"</thead><tbody>").concat(e,"</tbody></table></div>")},l.code=function(n,e){var t=!(!e||!g.a.getLanguage(e))?g.a.highlight(e,n).value:n;return'<pre><code class="hljs '.concat(e,'">').concat(t,"</code></pre>")};var r=h()(e,{renderer:l});return f.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:r}})}return f.a.createElement("span",null)}}]),e}(p.Component))},886:function(n,e,t){},930:function(n,e){n.exports='# Slider 滑动输入条\n\n\n\n## 基本用法\n```jsx\nimport { Cell, Slider } from \'zarm\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 0,\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell title="普通">\n          <Slider\n            value={this.state.value}\n            onChange={(value) => {\n              console.log(value);\n            }}\n          />\n        </Cell>\n\n        <Cell title="设置默认值">\n          <Slider defaultValue={20} />\n        </Cell>\n\n        <Cell title="设置上下限">\n          <Slider min={-100} max={100} defaultValue={0} />\n        </Cell>\n\n        <Cell title="设置步长">\n          <Slider step={10} />\n        </Cell>\n\n        <Cell title="禁用状态">\n          <Slider defaultValue={20} disabled />\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| value | number | - | 值 |\n| defaultValue | number | - | 初始值 |\n| min | number | - | 最小值 |\n| max | number | - | 最大值 |\n| step | number | 1 | 步长 |\n| disabled | boolean | false | 是否禁用 |\n| onChange | (value?: number) => void | - | 值变化时触发的回调函数 |\n'}}]);
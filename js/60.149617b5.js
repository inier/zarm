(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1206:function(n,e,t){},873:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return v});var r=t(17),s=t.n(r),a=t(18),l=t.n(a),c=t(19),p=t.n(c),i=t(44),o=t.n(i),u=t(20),h=t.n(u),m=t(14),g=t.n(m),d=t(891),v=(t(1206),function(n){function e(){var n,r;s()(this,e);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=l()(this,(n=p()(e)).call.apply(n,[this].concat(c))),g()(o()(r),"document",function(){return{document:t(926),className:"progress-page"}}),r}return h()(e,n),e}(d.a))},926:function(n,e){n.exports="# Progress 进度条\n\n\n\n## 基本用法\n```jsx\nimport { Progress, Cell, Select, Stepper } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      percent: 10,\n      theme: 'primary',\n      shape: 'round',\n      weight: 'normal'\n    };\n  }\n\n  render() {\n    const { percent, theme, shape, weight } = this.state;\n\n    return (\n      <div>\n        <div className=\"progress\">\n          <Progress\n            percent={percent}\n            theme={theme}\n            shape={shape}\n            weight={weight}\n          >\n            {percent}%\n          </Progress>\n        </div>\n        <div className=\"progress\">\n          <Progress\n            type=\"circle\"\n            percent={percent}\n            theme={theme}\n            shape={shape}\n            weight={weight}\n          >\n            <div className=\"progress-content\">\n              <span className=\"progress-text\">{percent}</span>\n              <span className=\"progress-percent\">%</span>\n            </div>\n          </Progress>\n        </div>\n        <div className=\"progress\">\n          <Progress\n            type=\"semi-circle\"\n            percent={percent}\n            theme={theme}\n            shape={shape}\n            weight={weight}\n          >\n            <div className=\"progress-content\">\n              <span className=\"progress-text\">{percent}</span>\n              <span className=\"progress-percent\">%</span>\n            </div>\n          </Progress>\n        </div>\n\n        <Cell title=\"进度\">\n          <Stepper\n            step={10}\n            min={0}\n            max={100}\n            value={percent}\n            onChange={(value) => {\n              if (Number.isNaN(Number(value))) return;\n              this.setState({\n                percent: value,\n              });\n            }}\n          />\n        </Cell>\n\n        <Cell hasArrow title=\"主题\">\n          <Select\n            value={theme}\n            dataSource={[\n              { value: 'primary', label: 'primary' },\n              { value: 'success', label: 'success' },\n              { value: 'warning', label: 'warning' },\n              { value: 'danger', label: 'danger' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                theme: selected[0].value,\n              });\n            }}\n          />\n        </Cell>\n\n        <Cell hasArrow title=\"线条形状\">\n          <Select\n            value={shape}\n            dataSource={[\n              { value: 'round', label: 'round' },\n              { value: 'rect', label: 'rect' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                shape: selected[0].value,\n              });\n            }}\n          />\n        </Cell>\n\n        <Cell hasArrow title=\"线条粗细\">\n          <Select\n            value={weight}\n            dataSource={[\n              { value: 'normal', label: 'normal' },\n              { value: 'thin', label: 'thin' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                weight: selected[0].value,\n              });\n            }}\n          />\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | 'primary' | 主题，可选值 `default`, `primary`, `success`, `warning`, `danger` |\n| percent | number | 0 | 进度百分比（范围：0～100） |\n| type | string | 'line' | 类型，可选值 `line`, `circle`, `semi-circle` |\n| shape | string | 'round' | 线条形状，可选值 `round`, `rect` |\n| weight | string | 'normal' | 线条粗细，可选值 `normal`, `thin` |\n"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{674:function(n,e){n.exports='# NavBar 导航栏\n\n\n\n## 左侧渲染\n```jsx\nimport { NavBar, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <NavBar\n        left={<Icon\n          type="arrow-left"\n          theme="success"\n          onClick={() => window.history.back()}\n        />}\n        title="这是标题"\n      />\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 右侧渲染\n```jsx\nimport { NavBar, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <NavBar\n        title="这是标题这是标题这是标题"\n        right={\n          <Icon\n            type="question-round"\n            theme="success"\n            onClick={() => window.alert(\'click icon\')}\n          />\n        }\n      />\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 复数渲染\n```jsx\nimport { NavBar, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <NavBar\n        left={\n          <Icon \n            type="arrow-left"\n            theme="success"\n            onClick={() => window.history.back()}\n          />\n        }\n        title="这是标题"\n        right={<div>\n          <Icon type="add" theme="success" onClick={() => alert(\'click icon1\')} />\n          <Icon\n            style={{ marginLeft: 16 }}\n            type="question-round"\n            theme="success"\n            onClick={() => alert(\'click icon2\')}\n          />\n        </div>}\n      />\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| title | ReactNode | - | 标题渲染 |\n| left | ReactNode | - | 导航栏左侧渲染 |\n| right | ReactNode | - | 导航栏右侧渲染 |\n\n'}}]);
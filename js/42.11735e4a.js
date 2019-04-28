(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1138:function(n,t){n.exports='<p align="center">\n  <a href="http://zarm.design">\n    <img width="200" src="https://zarm.design/images/logo.ce68565d.svg">\n  </a>\n</p>\n\n<h1 align="center">Zarm</h1>\n\n<div align="center">\n  \n  [![Build Status](https://www.travis-ci.org/ZhonganTechENG/zarm.svg?branch=master)](https://www.travis-ci.org/ZhonganTechENG/zarm)\n  [![Coverage Status](https://img.shields.io/coveralls/ZhonganTechENG/zarm/master.svg)](https://coveralls.io/github/ZhonganTechENG/zarm?branch=master) \n  [![npm package](https://img.shields.io/npm/v/zarm.svg)](https://www.npmjs.org/package/zarm)\n  [![NPM downloads](http://img.shields.io/npm/dm/zarm.svg)](https://npmjs.org/package/zarm) \n  ![JS gzip size](http://img.badgesize.io/https://unpkg.com/zarm@latest/dist/zarm.min.js?compression=gzip&label=gzip%20size:%20JS)\n  ![CSS gzip size](http://img.badgesize.io/https://unpkg.com/zarm@latest/dist/zarm.min.css?compression=gzip&label=gzip%20size:%20CSS)\n\n  众安科技移动端UI组件库，基于React、React-Native。\n</div>\n\n## Version 版本\n\n- 稳定版：[![npm package](https://img.shields.io/npm/v/zarm.svg)](https://www.npmjs.org/package/zarm)\n- 开发版：[![npm package](https://img.shields.io/npm/v/zarm/alpha.svg)](https://www.npmjs.org/package/zarm)\n\n\n## Install 安装\n\n\n使用npm安装：\n```bash\nnpm install zarm --save\n```\n\n或者通过cdn引入umd模块：\n```html\n<link rel="stylesheet" href="https://unpkg.com/zarm@latest/dist/zarm.min.css">\n<script type="text/javascript" src="https://unpkg.com/zarm@latest/dist/zarm.min.js"><\/script>\n```\n\n## Usage 使用\n\n#### 全组件引入\n\n```js\nimport { Button, Cell } from \'zarm\';\nimport \'zarm/dist/zarm.min.css\';\n```\n\n#### 按需加载\n\n* 方法一（推荐）\n\n> 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 自动加载Sass文件\n\n```js\n  // .babelrc or babel-loader option\n  {\n    "plugins": [\n      [\'import\', {\n        libraryName: \'zarm\',\n        style: true,\n      }],\n    ]\n  }\n```\n```js\nimport { Button, Cell } from \'zarm\';\n```\n\n* 方法二：\n\n```js\nimport Button from \'zarm/lib/Button\';\nimport \'zarm/lib/Button/style\';\n```\n\n#### 定制主题\n\n通过覆盖Sass变量定义达到定制主题的效果\n\n```css\n@import "~zarm/lib/style/index.scss";  // 引入官方提供的Sass基础样式文件\n@import "your-theme-file.scss";  // 用于覆盖上面定义的变量\n@import "~zarm/lib/style/components.scss";  // 引入官方提供的组件样式文件\n```\n\n`your-theme-file.scss` 示例如下：\n\n```css\n$theme-primary: #108ee9;\n```\n变量名可参考 [default.scss](https://github.com/ZhonganTechENG/zarm/blob/master/components/style/themes/default.scss)\n\n> 注意：这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 `babel-plugin-import` 的 `style` 属性一起使用。\n\n## Changelog 更新日志\n[CHANGELOG.md](https://github.com/ZhonganTechENG/zarm/blob/master/CHANGELOG.md)\n\n## License\nMIT\n'},626:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return d});var s=e(17),a=e.n(s),r=e(18),i=e.n(r),m=e(19),o=e.n(m),c=e(44),p=e.n(c),l=e(20),g=e.n(l),h=e(14),u=e.n(h),d=function(n){function t(){var n,s;a()(this,t);for(var r=arguments.length,m=new Array(r),c=0;c<r;c++)m[c]=arguments[c];return s=i()(this,(n=o()(t)).call.apply(n,[this].concat(m))),u()(p()(s),"document",function(){return{document:e(1138),className:"quick-start-page"}}),s}return g()(t,n),t}(e(885).a)},885:function(n,t,e){"use strict";e.d(t,"a",function(){return f});var s=e(17),a=e.n(s),r=e(21),i=e.n(r),m=e(18),o=e.n(m),c=e(19),p=e.n(c),l=e(20),g=e.n(l),h=e(1),u=e.n(h),d=e(888),z=e.n(d),b=e(889),v=e.n(b),f=(e(890),e(886),function(n){function t(){return a()(this,t),o()(this,p()(t).apply(this,arguments))}return g()(t,n),i()(t,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=n.document,e=n.className;if("string"==typeof t){var s=new z.a.Renderer;s.table=function(n,t){return'<div class="grid-container"><table class="grid"><thead>'.concat(n,"</thead><tbody>").concat(t,"</tbody></table></div>")},s.code=function(n,t){var e=!(!t||!v.a.getLanguage(t))?v.a.highlight(t,n).value:n;return'<pre><code class="hljs '.concat(t,'">').concat(e,"</code></pre>")};var a=z()(t,{renderer:s});return u.a.createElement("div",{className:e,dangerouslySetInnerHTML:{__html:a}})}return u.a.createElement("span",null)}}]),t}(h.Component))},886:function(n,t,e){}}]);
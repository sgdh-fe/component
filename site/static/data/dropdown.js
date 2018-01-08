var modules= {"component":[{"id":"1","name":"dropdown","file":{"./lib/index.js":"import React from \"react\";\nimport \"./index.scss\";\nimport \"./reset.css\";\n\nexport default class Dropdown extends React.Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            visiable: false,\n            infor:  this.props.infor,            \n        }        \n    }\n    componentDidMount(){\n        document.onclick = (e)=>{\n            if(this.state.visiable == true){\n                this.state.visiable = false;\n                this.forceUpdate();\n            }\n        }\n    }\n    render() {\n        var styleObj = {};\n        if(this.props.width) {\n            styleObj = {\n                width: this.props.width\n            }\n        }\n        return (\n            <div className=\"dropdown\" style={styleObj}>\n                <div className=\"dropbtn\" onClick={(e)=>{\n                    e.stopPropagation();\n                    e.nativeEvent.stopImmediatePropagation();\n                    this.state.visiable = true;\n                    this.forceUpdate();    \n                }}>{this.state.infor.title}</div>\n                {\n                    <div className={this.state.visiable == false ? \"dropdown-content\" : \"dropdown-content active\"} >\n                        {\n                            this.state.infor.list.map((item, index)=>{\n                                return <a href=\"javascript:void(0)\" className={this.state.infor.value == item.value ? \"active\" : null} key={index} onClick={(e)=>{\n                                    this.state.infor.title = item.name;\n                                    this.state.infor.value = item.value;\n                                    this.props.onChange && this.props.onChange(this.state.infor.value);\n                                    this.state.visiable = false;\n                                    this.forceUpdate();\n                                }}>{item.name}</a>\n                            })\n                        }\n                    </div>\n                }\n            </div>\n        )\n    }\n}","readme":"## 下拉框\n向下弹出一个列表\n\n### 场景\n有多个选项选择且没有过多的空间全部展示出来, 一般使用表单情况下。\n\n### 安装\n```\n    npm install sogo-dropdown\n    // yarn add sogo-dropdown\n```\n\n### API\n| 属性名 | 说明 | 类型 | 默认值 |\n| ------| ------ | ------ | ----- |\n|title| 标题 |string|请选择|\n|list|下拉框展示的内容|Array Object|[]|\n\n### 事例代码\n```js\nimport React from 'react';\nimport { render } from 'react-dom';\nimport Dropdown from \"./lib/index.js\";\n\nrender(<Dropdown infor={{\n    title: \"学生列表\",\n    list: [\n        { name: \"张三\", value: 1 },\n        { name: \"李四\", value: 2 },\n        { name: \"王五\", value: 3 }\n    ]\n }}/>, document.getElementById('root'));\n```","./index.scss":".dropbtn {\n  background-color: #FFF;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAMAAADpsEdvAAAAM1BMVEVHcEyZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkc7p5lAAAAEHRSTlMAPWqqBL8P97jQnFou6Y4cdMDgOQAAADNJREFUCNc9xscRADAIxMBzBJz7r9YMDvpoIeuVkL4Fs19SAxwdV2jeOGAVJcfjGIizfgOeHwMRRsyGewAAAABJRU5ErkJggg==);\n  background-repeat: no-repeat;\n  background-position: 90% center;\n  padding: 16px;\n  padding-left: 10px;\n  font-size: 16px;\n  border: 1px solid #EEE;\n  text-align: center;\n  cursor: pointer; }\n\n/* The container <div> - needed to position the dropdown content */\n.dropdown {\n  display: inline-block;\n  position: relative;\n  width: 150px;\n  background: #FFF; }\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  position: absolute;\n  display: none;\n  width: 100%;\n  z-index: 1;\n  border: 1px solid #EEE;\n  border-top: none;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  background: #FFF; }\n\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 4px 16px;\n  text-decoration: none;\n  display: block; }\n\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover,\n.dropdown-content .active {\n  color: #fff;\n  background-color: #3697fd; }\n\n/* Show the dropdown menu on hover */\n.dropdown:hover .dropdown-content,\n.dropdown.active .dropdown-content {\n  display: block;\n  border-color: #3697fd; }\n\n/* Change the background color of the dropdown button when the dropdown content is shown */\n.dropdown:hover .dropbtn,\n.dropdown.active .dropbtn {\n  border-color: #3697fd; }\n","./reset.css":"* {\n    margin: 0;\n    padding: 0;\n    font-family: \"微软雅黑\";\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-size: 100%;\n    font-weight: 400;\n}\n\ndetails,\nfigcaption,\nfigure,\nmenu {\n    display: block;\n}\n\nol,\nli {\n    list-style: none;\n}\n\ninput,\nselect,\ntextarea {\n    outline: none;\n}\n\nimg {\n    display: block;\n    border: 0 none;\n}\n\ni,\nem {\n    font-style: normal;\n}\n\nb {\n    font-weight: 400;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nq {\n    quotes: none\n}\n\na {\n    cursor: pointer;\n    text-decoration: none;\n    font-family: \"微软雅黑\";\n}\n\n\n/* 清除浮动 */\n\n.clearfix:after {\n    content: '\\0020';\n    display: block;\n    height: 0;\n    clear: both\n}\n\n.clearfix {\n    *zoom: 1\n}\n\n\n/* 省略号样式 */\n\n.ellipsis {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n\n/* 禁止选择  */\n\n.unselected {\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n}"}}]}
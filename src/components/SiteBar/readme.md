### 组件简介
自己造的一个`site bar`组件，用于展示该项目扫描出的`xss站点`的某个页面链接，并且对该链接具有删除和扫描操作

### 组件属性
| 属性 | 说明 | 类型 | 默认值 |
|----------|---|---|--|
| className | 设置组件的`class`名称 | `string` | null |
| url | 页面的url链接 | `string` | - |
| status | 页面的xss状态 | `string` | - |
| handleClick | 点击扫描按钮触发的函数 | `func` | - |
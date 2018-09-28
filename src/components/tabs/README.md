# Tabs 组件

## props

| 属性        | 说明                                                                                                                                                 | 类型              | 默认值   | 必填 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | -------- | ---- |
| type        | tabs 的外观显示类型：<br>`column`-按列渲染，即导航条和内容列表垂直并列（渲染在一列上）<br>`row`-按行渲染，即导航条和内容列表水平并列（渲染在一行上） | ['column', 'row'] | 'column' | No   |
| activedName | 当前被激活的 tab（每个 tab 都必须指定一个名称）                                                                                                      | String            | ""       | No   |
| onSwitch    | 切换 tab 的回调函数                                                                                                                                  | Function          | () => {} | No   |
| className   | 自定义类名，可以指定自定义类名来扩展样式                                                                                                             | String            | -        | No   |

# TabPanel 子组件

定义每一个 Tab 的内容，比如 Tab 标签、图标等。

Tab 内容作为子元素在 TabPanel 中定义。

## props

| 属性  | 说明                                                           | 类型   | 默认值 | 必填 |
| ----- | -------------------------------------------------------------- | ------ | ------ | ---- |
| name  | 指定该 Tab 的名称，name 必须唯一                               | String | -      | Yes  |
| label | 指定该 Tab 的标签名                                            | String | -      | Yes  |
| icon  | 指定该 Tab 的 icon 名，若指定了 icon，则会在标签名前面渲染图标 | String | -      | No   |

# example

```javascript
import { Tabs, TabPanel } from 'common-components/tabs';
```

```html
<Tabs
  type="column"
  activedName="name1"
  onSwitch={(activedName) => {}}>
  <TabPanel name="name1" label="标签1">
    <div>这是Tab1</div>
  </TabPanel>
  <TabPanel name="name2" label="标签2">
    <div>这是Tab2</div>
  </TabPanel>
</Tabs>
```

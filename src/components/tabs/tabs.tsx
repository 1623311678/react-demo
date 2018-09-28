/**
 * Tabs组件
 * 内部包括TabPanel子组件
 * @author luoying
 * @since 17/06/01
 */

import "./tabs.less";

import React, { SFC, Component, ReactNode } from "react";
import classnames from "classnames";
import { TabPanelProps } from "components/tab-panel";

export type TAB_TYPE = "column" | "row";

export interface TabsProps {
  // 当前被激活的tab（每个tab都必须指定一个名称）
  activedName?: string;

  // tabs的外观显示类型，默认按column渲染
  // column-按列渲染，即导航条和内容列表垂直并列（渲染在一列上）
  // row-按行渲染，即导航条和内容列表水平并列（渲染在一行上）
  type?: TAB_TYPE;

  // 切换tab的回调函数
  onSwitch?: (tabName: string) => void;

  // tabs的点击事件回调函数
  // 点击在tabs内部任何地方
  onClick?: (evt: React.MouseEvent<HTMLElement>) => void;

  visible?: boolean;

  className?: string;

  /**
   * 是否不显示tab条
   */
  noShowTabs?: boolean;
}

export interface NavItemProps {
  // 导航条Tab的名称，必须唯一
  name: string;
  // 导航条Tab的标签名
  label: string;
  // 导航条Tab的icon名，只有指定了icon才会渲染图标
  icon?: string;
  // 导航条Tab是否被激活选中
  actived?: boolean;
  // 导航条Tab激活回调函数，暴露该导航条的name作为参数传出
  onActive?: (tabName: string) => void;
}

interface TabsState {
  activedName: string;
}

// 导航条组件
const NavItem: SFC<NavItemProps> = props => {
  const onActive = (evt: React.MouseEvent<HTMLLIElement>) => {
    // 阻止冒泡
    evt.stopPropagation();
    // 导航条Tab被激活，触发回调，以便上层父组件获知状态变化
    props.onActive && props.onActive(props.name);
  };

  return (
    <li
      className={classnames("tab", props.name, props.actived && "active")}
      onClick={onActive}
    >
      {props.icon && <span className={classnames("tab-icon", props.icon)} />}
      <span className="tab-label">{props.label}</span>
    </li>
  );
};

NavItem.defaultProps = {
  name: "",
  label: "",
  icon: "",
  actived: false
};

export default class Tabs extends Component<TabsProps, TabsState> {
  static defaultProps: TabsProps = {
    visible: true,
    activedName: "",
    type: "column",
    noShowTabs: false
  };

  constructor(props: TabsProps) {
    super(props);
    this.state = { activedName: props.activedName || "" };
  }

  componentWillReceiveProps(nextProps: TabsProps) {
    if (
      nextProps.activedName &&
      nextProps.activedName !== this.state.activedName
    ) {
      this.setState({ activedName: nextProps.activedName });
    }
  }

  render() {
    const { className, children, type, noShowTabs } = this.props;
    let { activedName } = this.state;

    const navs: NavItemProps[] = [];
    const contents: ReactNode[] = [];
    let activedIndex = -1;

    // 遍历所有TabPanel子组件，提取出来标签和内容节点，从而单独渲染出来导航条和内容列表
    React.Children.forEach(children, (child: any | null) => {
      if (!child) return;
      const { name, label, icon } = child.props as TabPanelProps;
      contents.push(child.props.children);
      navs.push({ name, label, icon });
    });

    // 当外部不传递被激活Tab名称时，则使用第一个Tab作为激活项
    if (!activedName && navs.length > 0) activedName = navs[0].name;

    // 重新组织导航条
    const navItems = navs.map((item, index) => {
      const actived = item.name === activedName;
      actived && (activedIndex = index);
      return (
        <NavItem
          key={index}
          actived={actived}
          onActive={this.onSwitch}
          {...item}
        />
      );
    });

    // 重新组织内容列表
    const contentItems = contents.map((content, index) => {
      const actived = index === activedIndex;
      return (
        <li key={index} className={classnames("content", actived && "active")}>
          {content}
        </li>
      );
    });

    return (
      <div
        className={classnames("g-tabs", type, className)}
        onClick={this.props.onClick}
      >
        <ul className={classnames("g-tabs-nav", noShowTabs && "hide")}>
          {navItems}
        </ul>
        <ul className={classnames("g-tabs-content")}>{contentItems}</ul>
      </div>
    );
  }

  onSwitch = (activedName: string) => {
    // if (activedName === this.state.activedName) return;
    this.setState({ activedName });
    // 切换了Tab，触发回调，上层父组件可以获知Tabs组件的状态变化
    this.props.onSwitch && this.props.onSwitch(activedName);
  };
}

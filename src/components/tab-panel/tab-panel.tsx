/**
 * Tab组件的TabPanel子组件（空组件）
 * @author luoying
 * @since 17/06/01
 */

import { SFC } from 'react';

export interface TabPanelProps {
  // 指定该Tab的名称，name必须唯一
  name: string;
  // 指定该Tab的标签名
  label: string;
  // 指定该Tab的icon名，若指定了icon，则会在标签名前面渲染图标
  icon?: string;
}

const TabPanel: SFC<TabPanelProps> = () => {
  return null;
};

TabPanel.defaultProps = {
  name: '',
  label: '',
  icon: '',
};

export default TabPanel;

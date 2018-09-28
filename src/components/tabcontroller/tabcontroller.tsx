import * as React from 'react';
import './tabcontroller.less';
import classnames from 'classnames';

interface TabControllerProps {}
interface TabControllerState {
  currentIndex: number;
  index: number;
  name: string;
}

class TabController extends React.Component<
  TabControllerProps,
  TabControllerState
> {
  constructor(props: TabControllerProps) {
    super(props);
    this.state = {
      currentIndex: 0,
      index: 0,
      name: '',
    };
  }
  render() {
    return (
      <div>
        <span className="tab-container">
          <nav className="nav-tab">
            {React.Children.map(
              this.props.children,
              (element: any, index: number) => (
                <span
                  onClick={this.changeTab.bind(this, index)}
                  className={this.addTitleClass(index)}>
                  {element.props.id}
                </span>
              )
            )}
          </nav>
          <div>
            {React.Children.map(this.props.children, (element: any, index) => (
              <div className={this.addContentClass(index)}>{element}</div>
            ))}
          </div>
        </span>
      </div>
    );
  }
  addTitleClass(index: number) {
    return index === this.state.currentIndex
      ? 'tab-title tab-title-shown'
      : 'tab-title';
  }
  addContentClass(index: number) {
    return index === this.state.currentIndex
      ? 'tab-content shown'
      : 'tab-content';
  }
  changeTab(index: number) {
    this.setState({
      currentIndex: index,
    });
  }
}
export default TabController;

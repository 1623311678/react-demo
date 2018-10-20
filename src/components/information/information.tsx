import "./information.less";
import React from "react";
interface DataState {
  list: Array<{ id: number; name: string; icon: string }>;
  isClick: boolean;
  currentIndex: number;
  index: number;
  content: "";
}
interface DataProps {}

class Information extends React.Component<DataProps, DataState> {
  constructor(props: DataProps) {
    super(props);
    this.state = {
      list: [
        {
          id: 0,
          name: "settings",
          icon: "shezhi"
        },
        {
          id: 1,
          name: "locations",
          icon: "location"
        },
        {
          id: 2,
          name: "favourite",
          icon: "heart-copy"
        },
        {
          id: 3,
          name: "food",
          icon: "shiwu-"
        }
      ],
      isClick: false,
      currentIndex: 0,
      index: 0,
      content: ""
    };
  }
  private OnMouseClick(index: number) {
    this.setState({
      isClick: true,
      currentIndex: index
    });
  }

  render() {
    const { list: data, isClick, currentIndex } = this.state;
    return (
      <div className="information">
        <div className="information-top">
          <div className="information-avatar">
            <div className="avatar-content" />
          </div>
          <span className="avatar-text">BINNU DHILLON</span>
        </div>
        <div>
          {data.map((item: any, index: number) => {
            return (
              <div key={index}>
                <div
                  className={
                    isClick && index === this.state.currentIndex
                      ? /*`information-item1 item-${index}`*/ "information-item1"
                      : "information-item "
                  }
                  onClick={this.OnMouseClick.bind(this, index)}
                >
                  <div
                    className="item-name"
                    onClick={this.OnMouseClick.bind(this, index)}
                  >
                    <div className="item-text">{item.name} </div>

                    <div
                      className={`iconfont icon-${
                        item.icon
                      } item-iconfont-icon`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="information-content">
          {isClick ? <div>{data[currentIndex].name}{data[currentIndex].icon}</div> : <div />} 
        </div>
      </div>
    );
  }
}

export default Information;

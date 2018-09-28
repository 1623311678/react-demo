import "./information.less";
import React from "react";
interface DataState {
  list: Array<{ id: number; name: string; icon: string }>;
  isClick: boolean;
  currentIndex: number;
  index: number;
}
interface DataProps {}

class Information extends React.Component<DataProps, DataState> {
  constructor(props: DataProps) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          name: "settings",
          icon: "shezhi"
        },
        {
          id: 2,
          name: "locations",
          icon: "location"
        },
        {
          id: 3,
          name: "favourite",
          icon: "heart-copy"
        },
        {
          id: 4,
          name: "food",
          icon: "shiwu-"
        }
      ],
      isClick: false,
      currentIndex: 0,
      index: 0
    };
  }
  private OnMouseClick(index: number) {
    this.setState({
      isClick: true,
      currentIndex: index
    });
  }

  render() {
    const { list: data, isClick } = this.state;
    return (
      <div className="information">
        <div className="information-top" />
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
                    <span>{item.name}</span>
                    <span className={`iconfont icon-${item.icon}`}> </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Information;

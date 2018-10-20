import React from "react";
import "./information-menu.less";
import { Switch } from "react-router";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import DetailInformation from "components/detail-information";
interface InformationMenuProps {
  isClick: boolean;
  isLastStepClick: boolean;
}
interface InformationMenuState {
  isMenuClick: boolean;
  list: Array<{ id: number; item: string; item1: string }>;
}

class InformationMenu extends React.Component<
  InformationMenuProps,
  InformationMenuState
> {
  constructor(props: InformationMenuProps) {
    super(props);
    this.state = {
      isMenuClick: true,
      list: [
        {
          id: 0,

          item: "若这个世界凋谢我会守在你身边",
          item1: "全都会化作永远"
        },
        {
          id: 1,

          item: "用沉默坚决对抗万语千言",
          item1: "我曾也不曾后退"
        },
        {
          id: 2,

          item: "倘若这世界一切都在无情的崩裂",
          item1: "在你心上，度过每个黑夜"
        },
        {
          id: 3,

          item: "我会用手中的线为你逢源",
          item1: "这是缘，亦是命中最美的相见"
        },
        {
          id: 4,

          item: "陪你看日升月潜",
          item1: "别恨天，笑容更适合你的脸"
        },
        {
          id: 5,

          item: "陪你看沧海变迁",
          item1: "再一遍，记起从前的一滴一点"
        },
        {
          id: 6,

          item: "陪你踱天明的街",
          item1: "别怨我不再身边"
        },
        {
          id: 7,

          item: "陪你一字又一言",
          item1: "十七层因我而有的笑脸"
        }
      ]
    };
  }

  render() {
    const { list: data } = this.state;
    return (
      <div>
        <div className="information-menu">
          {this.props.isClick ? (
            <div className="menu-detail">
              {data.map((item: any, index: number) => {
                return (
                  <div key={index} className="menu-detail-item">
                    <div className="item-detail">{item.item}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default InformationMenu;

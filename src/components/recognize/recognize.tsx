import React from "react";
import "./recognize.less";

interface RecognizeState {
  list: Array<{ id: number; image: string }>;
  isTouch: boolean;
  index: number;
  currentIndex: number;
  startX: any;
  endX: any;
  isMove: boolean;
}

interface Recognizeprops {}

const MIN_TOUCH_DISTENCE = 50;

class Recognize extends React.Component<Recognizeprops, RecognizeState> {
  constructor(props: Recognizeprops) {
    super(props);
    this.state = {
      list: [
        {
          id: 0,
          image: require("./1.jpg")
        },
        {
          id: 1,
          image: require("./2.jpg")
        },
        {
          id: 2,
          image: require("./3.jpg")
        },
        {
          id: 3,
          image: require("./4.jpg")
        },
        {
          id: 4,
          image: require("./5.jpg")
        },
        {
          id: 5,
          image: require("./6.jpg")
        },
        {
          id: 6,
          image: require("./7.jpg")
        },
        {
          id: 7,
          image: require("./8.jpg")
        },
        {
          id: 8,
          image: require("./9.jpg")
        },
        {
          id: 9,
          image: require("./10.jpg")
        }
      ],
      isTouch: false,
      index: 0,
      currentIndex: 0,
      startX: "",
      endX: "",
      isMove: false
    };
  }
  /* OnTouchScreen = () => {
    this.setState({
      isTouch: !this.state.isTouch,
      index:
        this.state.index === this.state.list.length - 1
          ? 1
          : this.state.index + 1
    });
  };*/
  handleTouchStart = (e: any) => {
    this.setState({
      startX: e.changedTouches[0].pageX,
      isTouch: true,
      index:
        this.state.index === this.state.list.length - 1
          ? 1
          : this.state.index + 1
    });
    console.log("start======" + this.state.startX);
  };
  handleTouchMove = (e: any) => {
    this.setState({ isMove: true });
  };
  handleTouchEnd(e: any, index: number) {
    if (this.state.endX - this.state.startX > 20) {
      // alert('点击左');
      this.clickLeft(index);
    } else if (this.state.startX - this.state.endX > 20) {
      // alert('点击右');
      this.clickRight();
    }

    this.setState({
      endX: e.changedTouches[0].pageX
    });
    console.log("end======" + this.state.endX);
  }
  clickLeft(indexParam: any) {
    const index = indexParam || this.state.index;
    console.log(index);
    this.setState({
      index: index === 0 ? this.state.list.length - 1 : index - 1
    });
  }

  clickRight() {
    const index = this.state.index;
    this.setState({
      index: index === this.state.list.length - 1 ? 0 : index + 1
    });
  }

  render() {
    let { list: data, isTouch, index } = this.state;

    return (
      <div className=" recognize">
        <div
          key={index}
          className="recognize-image"
          onTouchStart={this.handleTouchStart}
         
          onTouchEnd={this.handleTouchEnd.bind(this)}
        >
          {isTouch ? (
            <img src={data[index].image} alt="" className="recognize-image"  onTouchMove={this.handleTouchMove}/>
          ) : (
            <img src={require("./1.jpg")} alt="" className="recognize-image" />
          )}
        </div>

        <ul className="recognize-text">
          <li>你知道吗</li>
          <li>小可爱，我们等你很久了哦</li>
          <li>一定是有个漂亮</li>
          <li>emmmm超爱你</li>
          <li>让我们开启旅途</li>
        </ul>
      </div>
    );
  }
}

export default Recognize;

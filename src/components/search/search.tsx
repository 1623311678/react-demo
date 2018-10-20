import React from "react";
import "font/iconfont.css";
import "./search.less";


class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <div className="search-item">
          <input type="search" placeholder="search" />
          <div className="search-icon">
            <div className="iconfont icon-sousuo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;

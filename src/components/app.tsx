import React from "react";
import Login from "components/login";
import Search from "components/search";
import TabController from "components/tabcontroller";
import Tabs from "components/tabs";
import TabPanel from "components/tab-panel";
import Information from "components/information";

import "./app.less";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-login">
          <Login />
        </div>
        <div className="app-search">
          <Search />
        </div>
        <div>

        </div>
        <Information></Information>
      </div>
    );
  }
}

export default App;

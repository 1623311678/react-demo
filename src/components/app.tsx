import React from "react";
import Login from "components/login";
import Search from "components/search";
import TabController from "components/tabcontroller";
import Tabs from "components/tabs";
import TabPanel from "components/tab-panel";
import Information from "components/information";
import IosLogin from "components/ios-login";
import Recognize from "components/recognize";
import "./app.less";
import { Switch } from "react-router";
import { HashRouter as Router, Route, Link } from "react-router-dom";


class App extends React.Component {
  /* render() {
   
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
        <Router>
          <div>
            <Route exact path="/" component={IosLogin} />
            <Route path="/Recognize" component={Recognize} />
          </div>
        </Router>
      </div>*/
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Route exact path="/" component={IosLogin} />
            <Route path="/Recognize" component={Recognize} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

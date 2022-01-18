import React, { Component } from "react";
import { Route } from "react-router-dom";
import SoftwareList from "./SoftwareToolsManage/SoftwareList";
import SoftwareView from "./SoftwareToolsManage/SoftWareView";

//css
import '../css/new.css';
//header
import HeaderAdmin from './Header/Header admin';
//footer
import Footer from "./Footer/Footer";

//container
import LoginForm from "./LoginForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderAdmin />
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/SoftwareList" component={SoftwareList} />
        <Route exact path="/SoftwareView/:swtcode" component={SoftwareView} />
        <Footer />
      </div>
    );
  }
}

export default App;

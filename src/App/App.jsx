import React from "react";
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import {Helmet} from "react-helmet";

import Home from './Home';
import Project from "./Project/Project";
import Menu from './Menu';
import Footer from './Footer';

import '../styles.css';

@withRouter
class App extends React.PureComponent {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Portfolio - Hao-Cher Hong</title>
        </Helmet>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/project/:projectId" component={Project}/>
        </Switch>
        <Menu/>
        <Footer/>
      </div>
    );
  }
}


export default hot(App);
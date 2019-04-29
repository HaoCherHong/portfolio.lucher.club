import React from "react";
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Switch, Route, Redirect, withRouter } from "react-router-dom";

import Home from './Home';
import Project from "./Project";

@withRouter
class App extends React.PureComponent {
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, this.props);
    if (prevProps.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/project/" component={Project}/>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </div>
    );
  }
}


export default hot(props => <BrowserRouter><App/></BrowserRouter>);
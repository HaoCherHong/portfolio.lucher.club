import React from 'react';
import {Switch, Link, Route, Redirect} from 'react-router-dom';

import Menu from './Menu';
import DcardMobileWeb from "./projects/DcardMobileWeb";
import SIGHT from "./projects/SIGHT";
import PUPY from "./projects/PUPY";

import {projectNavBar} from './App.css';

export default props => (
  <div>
    <nav className={projectNavBar}>
      <div>
        <Link to="/">home</Link>
      </div>
    </nav>
    <Switch>
      <Route path="/project/dcard-mobile-web" exact component={DcardMobileWeb}/>
      <Route path="/project/sight" exact component={SIGHT}/>
      <Route path="/project/pupy" exact component={PUPY}/>
      <Route path="*">
        <Redirect to="/"/>
      </Route>
    </Switch>
    <Menu/>
  </div>
);
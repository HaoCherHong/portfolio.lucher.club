import React from "react";
import { hot } from 'react-hot-loader/root'
import cx from "classnames";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import projects from './projects.json';

import {
  block,
  typeBlock,
  typeBlockType,
  typeBlockTypeTitle,
  typeBlockTypeItem,
  typeBlockTypeItemTitle,
  typeBlockTypeItemCaption,
  typeBlockTypeItemTag
} from './App.css';

import Intro from './Intro';
import DcardMobileWeb from "./projects/DcardMobileWeb/DcardMobileWeb.jsx";

const Menu = () => (
  <div className={cx(block, typeBlock)}>
    {
      Object.keys(projects).map(type => (
        <div className={typeBlockType} key={type}>
          <div className={typeBlockTypeTitle}>{type}</div>
          {
            projects[type].map((item, i) => (
              <Link to={item.link}>
                <div className={typeBlockTypeItem} key={i}>
                  <div className={typeBlockTypeItemTitle}>
                    {item.title}
                  </div>
                  <div className={typeBlockTypeItemCaption}>
                    {item.caption}
                  </div>
                  <div>
                    {item.tags.map((tag, i) => <span key={i} className={typeBlockTypeItemTag}>{tag}</span>)}
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      ))
    }
  </div>
);

@hot
export default class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Intro}/>
          <Route path="/dcard-mobile-web" exact component={DcardMobileWeb}/>
        </Switch>
        <Menu/>
      </BrowserRouter>
    );
  }
}
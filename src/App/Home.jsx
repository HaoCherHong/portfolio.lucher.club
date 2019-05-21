import React from 'react';
import cx from "classnames";

import downArrowSvg from './angle-arrow-down.svg';

import {
  block,
  landingBlock,
  landingBlockRect,
  landingBlockRectTop,
  landingBlockRectLeft,
  landingBlockRectRight,
  landingBlockRectBottom,
  downArrow
} from './App.css';

import Menu from './Menu';

export default props => (
  <div>
    <div className={cx(block, landingBlock)}>
      <div className={landingBlockRect}>
        <div className={landingBlockRectTop}>
          <div className={landingBlockRectLeft}>
            <img src="/images/portrait.jpg" alt="Portrait of Hao-Cher Hong"/>  
          </div>
          <div className={landingBlockRectRight}>
            <div>Hao-<br/>Cher<br/>Hong</div>
          </div>
        </div>
        <div className={landingBlockRectBottom}>
          Works and Projects<br/>
          <span className={downArrow} dangerouslySetInnerHTML={{__html: downArrowSvg}}/>
        </div>
      </div>
    </div>
    <Menu/>
  </div>
);
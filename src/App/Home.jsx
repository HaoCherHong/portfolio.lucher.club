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
  downArrow,
  breath
} from './App.css';

const moveToMenu = () => {
  const menu = document.getElementById('menu');
  window.scrollTo({
    top: menu.offsetTop,
    behavior: 'smooth'
  });
}

export default props => (
  <div>
    <div className={cx(block, landingBlock)} onClick={moveToMenu}>
      <div className={landingBlockRect}>
        <div className={landingBlockRectTop}>
          <div className={landingBlockRectLeft}>
            <img src="/images/portrait.jpg" alt="Portrait of Hao-Cher Hong"/>  
          </div>
          <div className={landingBlockRectRight}>
            <div>Hao-<br/>Cher<br/>Hong</div>
          </div>
        </div>
        <div
          className={landingBlockRectBottom}
          style={{animation: `2s infinite ease-in-out ${breath}`}}>
          Works and Projects<br/>
          <span
            className={downArrow}
            dangerouslySetInnerHTML={{__html: downArrowSvg}}/>
        </div>
      </div>
    </div>
  </div>
);
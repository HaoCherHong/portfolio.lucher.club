import React from 'react';
import {container, innerContainer, overview, overviewInfo, overviewInfoRight, featureList, body, header, title, subtitle, dateAndType, tags, tag as tagCls} from './DcardMobileWeb.css';
import projects from '../../projects.json';

import bodyMD from './body.md';

const project = projects['game'][1];

export default (props) => {
  return (
    <div className={container}>
      <div className={overview}>
        <div className={innerContainer}>
          <header className={header}>
            <h1 className={title}>{project.title}</h1>
            <h2 className={subtitle}>{project.caption}</h2>
          </header>
          <div className={overviewInfo}>
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/B56YjWi1ces" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className={overviewInfoRight}>
              <div className={dateAndType}>{project.type}．2017-2018</div>
              <div className={tags}>{project.tags.map((tag, i) => <span key={i} className={tagCls}>{tag}</span>)}</div>
              <ul className={featureList}>
                <li>Leader of 5 people team</li>
                <li>Project Manager</li>
                <li>Best Technique Award winner</li>
                <li>Best Creativity Award winner</li>
                <li>Original game design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={body}>
        <div className={innerContainer}>
          <div dangerouslySetInnerHTML={{__html: bodyMD}}/>
        </div>
      </div>
    </div>
  )
}
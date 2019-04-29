import React from 'react';
import {container, innerContainer, overview, overviewInfo, overviewInfoRight, featureList, body, header, title, subtitle, dateAndType, tags, tag as tagCls} from '../Project.css';
import projects from '../projects.json';

import bodyMD from './body.md';

const project = projects['website'][1];

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
              <img width="560" src="/images/pupy.png"/>
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
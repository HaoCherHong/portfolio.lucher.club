import React from 'react';
import {container, innerContainer, overview, overviewInfo, overviewInfoRight, featureList, body, header, title, subtitle, dateAndType, tags, tag as tagCls} from '../Project.css';
import projects from '../projects.json';

import bodyMD from './body.md';

const project = projects['website'][0];

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
              <img width="560" src="/images/dcard_office.png"/>
            </div>
            <div className={overviewInfoRight}>
              <div className={dateAndType}>{project.type}．2017 July-August</div>
              <div className={tags}>{project.tags.map((tag, i) => <span key={i} className={tagCls}>{tag}</span>)}</div>
              <ul className={featureList}>
                <li>2 Months Intern Project</li>
                <li>Frontend Developer</li> 
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
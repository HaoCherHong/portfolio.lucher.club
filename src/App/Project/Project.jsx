import React from 'react';
import {Link, Redirect} from 'react-router-dom';

import Menu from '../Menu';

import {navBar, container, innerContainer, overview, overviewInfo, overviewInfoRight, featureList, body, header, title, subtitle, dateAndType, tags, tag as tagCls} from './Project.css';

import projects from './projects';

export default props => {
  const {projectId} = props.match.params;
  const project = projects.find(project => project.id === projectId);

  if (!project)
    return <Redirect to="/"/>;

  return (
    <div>
      <nav className={navBar}>
        <div>
          <Link to="/">home</Link>
        </div>
      </nav>
      <div className={container}>
        <div className={overview}>
          <div className={innerContainer}>
            <header className={header}>
              <h1 className={title}>{project.title}</h1>
              <h2 className={subtitle}>{project.caption}</h2>
            </header>
            <div className={overviewInfo}>
              <div>
                {
                  typeof project.image === 'string' ? (
                    <img width="560" src={project.image}/>
                  ) : project.image
                }
              </div>
              <div className={overviewInfoRight}>
                <div className={dateAndType}>{project.type}．{project.time}</div>
                <div className={tags}>{project.tags.map((tag, i) => <span key={i} className={tagCls}>{tag}</span>)}</div>
                <ul className={featureList}>
                  {
                    project.features && project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={body}>
          <div className={innerContainer}>
            <div dangerouslySetInnerHTML={{__html: project.body}}/>
          </div>
        </div>
      </div>
      <Menu/>
    </div>
  )
};
import React from 'react';
import {
  Redirect,
  Link,
} from 'react-router-dom';
import { Helmet } from "react-helmet";

import {
  innerContainer,
  overview,
  overviewInfo,
  overviewInfoRight,
  featureList,
  body,
  header,
  title,
  caption,
  coverImage,
  dateAndType,
  tags,
  tag as tagCls,
  breadcrumbContainer,
  breadcrumbEntry,
  breadcrumbEntryActive,
  breadcrumbSplitter,
} from './Project.css';

import projects from './projects';

const Breadcrumb = (props) => {
  return (
    <nav className={breadcrumbContainer}>
      <Link to={'/'} className={breadcrumbEntry}>
        Home
      </Link>
      <span className={breadcrumbSplitter}>{'>'}</span>
      <Link
        to={{
          pathname: '/',
          hash: '#menu'
        }}
        className={breadcrumbEntry}
      >
        Menu
      </Link>
      <span className={breadcrumbSplitter}>{'>'}</span>
      <Link
        to={`/project/${props.id}`}
        className={`${breadcrumbEntry} ${breadcrumbEntryActive}`}
      >
      {props.title}</Link>
    </nav>
  );
}

export default props => {
  const {projectId} = props.match.params;
  const project = projects.find(project => project.id === projectId);

  if (!project)
    return <Redirect to="/"/>;

  return (
    <div>
      <Helmet>
        <title>{`${project.title} - Portfolio - Hao-Cher Hong`}</title>
      </Helmet>
      <div className={overview}>
        <div className={innerContainer}>
          <header className={header}>
            <Breadcrumb id={project.id} title={project.title} />
            <h1 className={title}>{project.title}</h1>
            <h2 className={caption}>{project.caption}</h2>
          </header>
          <div className={overviewInfo}>
            <div>
              {
                typeof project.cover === 'string' ? (
                  <img className={coverImage} src={project.cover}/>
                ) : project.cover
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
  )
};
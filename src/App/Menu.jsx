import React from 'react';
import cx from "classnames";
import {Link} from 'react-router-dom';

import projects from './Project/projects';

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

function renderCategory(title, projects) {
  return (
    <div className={typeBlockType}>
      <div className={typeBlockTypeTitle}>{title}</div>
      {
        projects.map((project, i) => (
          <Link key={i} to={project.id && `/project/${project.id}` || '#'}>
            <div className={typeBlockTypeItem}>
              <div className={typeBlockTypeItemTitle}>
                {project.title}
              </div>
              <div className={typeBlockTypeItemCaption}>
                {project.caption}
              </div>
              <div>
                {project.tags.map((tag, i) => <span key={i} className={typeBlockTypeItemTag}>{tag}</span>)}
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default props => (
  <div className={cx(block, typeBlock)}>
    {renderCategory('website', projects.filter(project => project.type === 'website'))}
    {renderCategory('game', projects.filter(project => project.type === 'game'))}
    {renderCategory('other', projects.filter(project => project.type === 'other'))}
  </div>
);
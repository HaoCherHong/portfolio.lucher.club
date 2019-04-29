import React from 'react';
import cx from "classnames";
import {Link} from 'react-router-dom';

import projects from './projects/projects.json';

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

export default props => (
  <div className={cx(block, typeBlock)}>
    {
      Object.keys(projects).map(type => (
        <div className={typeBlockType} key={type}>
          <div className={typeBlockTypeTitle}>{type}</div>
          {
            projects[type].map((item, i) => (
              <Link key={i} to={item.link || '#'}>
                <div className={typeBlockTypeItem}>
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
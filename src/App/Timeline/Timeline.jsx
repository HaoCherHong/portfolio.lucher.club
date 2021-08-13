import React, {useState, useEffect, useRef} from "react";
import cx from 'classnames';

import {throttle} from '../../utils';
import {block} from '../App.css';
import {
  timelineBlock,
  container,
  entry as entryCls,
  info,
  label,
  infoImage,
  infoBody,
  active as activeCls,
  inactive as inactiveCls,
  entryContainer,
  entryBackground,
} from './Timeline.css';

const entries = [
  {
    id: 0,
    bgUrl: '/images/image10.png',
  },
  {
    id: 1,
    bgUrl: '/images/image24.png',
  },
  {
    id: 2,
    bgUrl: '/images/maker-moocs-1.jpg',
  },
  {
    id: 3,
    bgUrl: '/images/image5.png',
  },
  {
    id: 4,
    bgUrl: '/images/image18.png',
  },
]

const Timeline = () => {
  /** @type {React.MutableRefObject<HTMLElement>} */
  const bgRef = useRef();
  const [opacity, setOpacity] = useState(0);
  const [activeId, setActiveId] = useState(entries[0].id);

  useEffect(() => {
    const callback = throttle(
      () => {
        const y = Math.min(window.innerHeight, Math.max(0, bgRef.current.getBoundingClientRect().y));
        const t = 1 - y / window.innerHeight;
        setOpacity(t);
      },
      16
    );

    callback();

    document.body.addEventListener('scroll', callback);
    return () => {
      document.body.removeEventListener('scroll', callback);
    }
  }, []);

  const bgUrl = entries[activeId].bgUrl;

  return (
    <div className={cx(block, timelineBlock)}>
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#111',
          opacity: opacity,
        }}>
      </div>
      <div
        key={bgUrl}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: opacity * 0.2,
          backgroundImage: bgUrl ? `url(${bgUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundAttachment: 'fixed',
          filter: 'saturate(0.3) blur(10px)'
        }}>
      </div>
      {
        entries.map((entry, index) => <Entry entry={entry} isActive={activeId === entry.id} setActiveId={setActiveId} />)
      }
    </div>
  );
}

const Entry = ({entry, isActive, setActiveId}) => {
  /** @type {React.MutableRefObject<HTMLElement>} */
  const entryRef = useRef();

  useEffect(() => {
    const callback = throttle(
      () => {
        const {y, height} = entryRef.current.getBoundingClientRect();
        const t = 1 - y / window.innerHeight;
        if (t > 0.3 && t <= 0.7) {
          setActiveId(entry.id);
        }
      },
      16
    );

    callback();

    document.body.addEventListener('scroll', callback);
    return () => {
      document.body.removeEventListener('scroll', callback);
    }
  }, []);

  return (
    <div className={cx({
      [entryContainer]: true,
      [activeCls]: isActive,
      [inactiveCls]: !isActive,
    })}>
      <div className={entryBackground}></div>
      <div ref={entryRef} className={cx({
          [entryCls]: true,
          [activeCls]: isActive,
          [inactiveCls]: !isActive,
        })}>
        <div className={label}>
          Game．Sep 2017 - Jan 2018
        </div>
        <div className={info}>
          <img src={entry.bgUrl} className={infoImage} />
          <p className={infoBody}>
            "SIGHT." is my project for a game design course in the college. In the semester, we, 4 other team members and I as lead developer and project manager, had to design and develop a game and attend a game making contest. The character have a special ability, "SIGHT.", that enables him to "see" the sight of monitor cameras. "SIGHT." is a first-person stealth game, player have to use his special ability to trick monitor cameras and steal the objectives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
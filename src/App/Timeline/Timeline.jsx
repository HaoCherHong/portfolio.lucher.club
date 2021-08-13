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
  canvas as canvasCls,
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

const interleave = (arr, thing) => [].concat(...arr.map(n => [n, thing])).slice(0, -1)

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
        entries.map((entry, index) => (
          <Entry key={entry.id} entry={entry} isActive={activeId === entry.id} setActiveId={setActiveId} />
        ))
      }
    </div>
  );
}

const Entry = ({entry, isActive, setActiveId}) => {
  /** @type {React.MutableRefObject<HTMLElement>} */
  const containerRef = useRef();
  /** @type {React.MutableRefObject<HTMLElement>} */
  const entryRef = useRef();
  /** @type {React.MutableRefObject<HTMLCanvasElement>} */
  const canvasRef = useRef();

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

  useEffect(() => {
    if (canvasRef.current) {
      drawCanvas(canvasRef.current, entry.id);
    }
  }, [canvasRef.current]);

  return (
    <div
      ref={containerRef}
      className={cx({
        [entryContainer]: true,
        [activeCls]: isActive,
        [inactiveCls]: !isActive,
      })}
    >
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
      {
        containerRef.current && (
          <canvas
            ref={canvasRef}
            className={canvasCls}
            style={{
              position: 'absolute',
              top: '0',
            }}
            width={entryRef.current.clientWidth}
            height={containerRef.current.clientHeight}
          />
        )
      }
    </div>
  );
}

/**
 * 
 * @param {HTMLCanvasElement} canvas
 */
const drawCanvas = (canvas, index) => {
  const ctx = canvas.getContext('2d');
  const circleSize = 16;
  const isOdd = index % 2 !== 0;
  const circleX = isOdd ? canvas.width - 364 : 364;
  const circleX2 = !isOdd ? canvas.width - 364 : 364;

  const p1 = index === 0 ? {
    x: canvas.width / 2,
    y: 0
  } : {
    x: circleX2,
    y: -canvas.height / 2,
  };
  const p2 = {
    x: circleX,
    y: canvas.height / 2
  };
  const p3 = index === entries.length - 1 ? {
    x: canvas.width / 2,
    y: canvas.height,
  } : {
    x: circleX2,
    y: canvas.height * 1.5,
  };
  const cp1 = {
    x: p1.x,
    y: (p1.y + p2.y) / 2,
  }
  const cp2 = {
    x: p2.x,
    y: (p1.y + p2.y) / 2,
  };
  const cp3 = {
    x: p2.x,
    y: (p2.y + p3.y) / 2,
  }
  const cp4 = {
    x: p3.x,
    y: (p2.y + p3.y) / 2,
  };

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, p2.x, p2.y);
  ctx.bezierCurveTo(cp3.x, cp3.y, cp4.x, cp4.y, p3.x, p3.y);
  ctx.stroke();

  if (index === 0) {
    gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
    gradient.addColorStop(0.25, `rgba(255, 255, 255, 1)`);
  } else {
    gradient.addColorStop(0, `rgba(255, 255, 255, 1)`);
  }
  gradient.addColorStop(0.45, 'rgba(255, 255, 255, 0)');
  gradient.addColorStop(0.55, 'rgba(255, 255, 255, 0)');
  if (index === entries.length - 1) {
    gradient.addColorStop(0.75, `rgba(255, 255, 255, 1)`);
    gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
  } else {
    gradient.addColorStop(1, `rgba(255, 255, 255, 1)`);
  }
  ctx.globalCompositeOperation = 'destination-in';
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export default Timeline;
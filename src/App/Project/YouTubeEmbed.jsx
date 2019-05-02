import React from 'react';

export default function YouTubeEmbed(props) {
  return (
    <iframe
      className='youtube'
      width={props.width}
      height={props.height}
      src={`https://www.youtube.com/embed/${props.id}`}
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen/>
  );
}
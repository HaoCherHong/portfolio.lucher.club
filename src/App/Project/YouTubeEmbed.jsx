import React from 'react';

export default function YouTubeEmbed(props) {
  return (
    <iframe
      width={props.width || 560}
      height={props.height || 315}
      src={`https://www.youtube.com/embed/${props.id}`}
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen/>
  );
}
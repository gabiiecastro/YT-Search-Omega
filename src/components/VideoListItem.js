import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const VideoListItem = ({ id, description, videoId }) => (
    <Link className="list-item" to={`/watch/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
    </div>
      <ReactPlayer url={`https://www.youtube.com/embed/${videoId}`} width="200px" height="150px"/>
    </Link>     
);

export default VideoListItem;
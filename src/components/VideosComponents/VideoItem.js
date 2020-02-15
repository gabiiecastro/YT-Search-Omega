import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <Grid item xs={12}>
        <li onClick={() => onVideoSelect(video)} className="list-group-item" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <div className="video-list media">
            <div className="media-left">
                <img src={video.snippet.thumbnails.medium.url} className="media-object"/>
            </div>
            
            <div className="media-body">
                <div className="media-heading">
                {video.snippet.title}
                </div>
            </div>
        </div>
    
    </li>        
        </Grid>
    )
}

export default VideoItem;



		
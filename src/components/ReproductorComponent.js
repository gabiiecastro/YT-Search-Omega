import React from 'react';
import { Paper } from '@material-ui/core';
import ReactPlayer from 'react-player';

const ReproductorVideo = ({ video }) => {
    const videoSrc = `https://www.youtube.com/embed/${video}`
    return (
        <Paper elevation={6} style={{ height: '70% '}}>
            <ReactPlayer url={videoSrc} playing={true} width="100%" height="600px" />
        </Paper>
    )
}

export default ReproductorVideo;
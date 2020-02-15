import React from 'react';

const VideoDetail = ({ video }) => {

    if(!video) return <div>Loading...</div>
    //console.log(video);

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        
        <React.Fragment>  
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
            <iframe src={videoSrc} playing={true} width="700" height="385" rameborder="0" allowfullscreen />
            </div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
			
		</div>
        </React.Fragment>
     
    )
}

export default VideoDetail;
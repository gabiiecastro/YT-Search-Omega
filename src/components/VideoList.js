import React from 'react';
import { connect } from 'react-redux';
import VideoListitem from './VideoListItem';
import selectVideos from '../selectors/videos';

export const VideoList = (props) => (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Videos</div>
        <div className="show-for-desktop">Video</div>
        <div className="show-for-desktop">Preview</div>
      </div>
      <div className="list-body">
        {
          props.videos.length === 0 ? (
            <p>No videos</p>
          ) : (
              props.videos.map((video) => {
                return <VideoListitem key={video.id} {...video} />;
              })
            )
        }
      </div>
    </div>
  );
  
  const mapStateToProps = (state) => {
    return {
      videos: selectVideos(state.videos, state.filters)
    };
  };
  
  export default connect(mapStateToProps)(VideoList);
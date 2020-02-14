import React from 'react';
import { connect } from 'react-redux';
import { startRemoveVideo } from '../actions/saveVideo';
import ReproductorComponent from '../components/ReproductorComponent';

export class WatchLaterPage extends React.Component {
    onRemove = () => {
        this.props.startRemoveVideo({ id: this.props.video.id });
        this.props.history.push('/');
    }

    render() {
        return (
        <div>
        <div className="page-header">
            <div className="content-container">
                <ReproductorComponent 
                    video={this.props.video.videoId}
                />    
            </div>            
        </div>
        <div className="content-container">
            <button className="button button--secondary" onClick={this.onRemove}>Remove Video</button>
        </div>
        </div>
        )
    }

};

const mapStateToProps = (state, props) => ({
    video: state.videos.find((video) => video.id === props.match.params.id)
});
  
const mapDispatchToProps = (dispatch) => ({
    startRemoveVideo: (data) => dispatch(startRemoveVideo(data))
});

  export default connect(mapStateToProps, mapDispatchToProps)(WatchLaterPage);
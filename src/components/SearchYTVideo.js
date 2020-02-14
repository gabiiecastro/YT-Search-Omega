import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SearchBar, VideoDetails, VideoList } from './VideosComponents';
import { startAddVideo } from '../actions/saveVideo';
import youtube from '../api/youtube';
import VideoForm from '../components/VideoForm';


function SearchYoutubeVideo() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	function handleSubmit(searchTerm) {
		youtube.get('search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: 'AIzaSyDAv8rgsURZshC2ZG0HRVdMVD9hf8ikP8Y',
				q: searchTerm,
				type: 'video'
			}
		}).then(({ data }) => {
			setVideos(data.items);
			setSelectedVideo(data.items[0])
		}).catch(err => {
			console.log('Error fetching videos!', err.message);
		});
	}

	useEffect(() => {
		handleSubmit('Partner Hero');
	}, []);


	function onSubmit(video) {
		dispatch(startAddVideo(video));
		history.push('/');
	}

	function onVideoSelect(video) {
		setSelectedVideo(video);
	}

	return (
		<div className="content-container">
			<Grid justify="center" container spacing={10}>
				<Grid item xs={12}>
					<Grid container spacing={10}>
						<Grid item xs={12}>
							<SearchBar onFormSubmit={handleSubmit} />
						</Grid>
						<Grid item xs={8}>
							<VideoDetails video={selectedVideo} />
							<VideoForm
								onSubmit={onSubmit}
								video={selectedVideo}
							/>
						</Grid>
						<Grid item xs={4}>
							<VideoList videos={videos} onVideoSelect={onVideoSelect} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>

	)

}

export default SearchYoutubeVideo;

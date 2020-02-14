import database from '../firebase/firebase';

// ADD_VIDEO
export const addVideo = (video) => ({
    type: 'ADD_VIDEO',    
    video
});
  
export const startAddVideo = (videoData = {}) => {
  return (dispatch, getState) => {    
    const uid = getState().auth.uid;
    //console.log(uid);
    const {
      description = '',
      videoId = ''
    } = videoData;
    const video = { description, videoId };
  
    return database.ref(`users/${uid}/videos`).push(video).then((ref) => {
      dispatch(addVideo({
        id: ref.key,
        ...video
      }));
    });
  };
};
  
// REMOVE_VIDEO
export const removeVideo = ({ id } = {}) => ({
  type: 'REMOVE_VIDEO',
  id
});

export const startRemoveVideo = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/videos/${id}`).remove().then(() => {
      dispatch(removeVideo({ id }));
    });
  };
};

// SET_VIDEOS
export const setVideos = (videos) => ({
  type: 'SET_VIDEOS',
  videos
});

export const startSetVideos = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    
    return database.ref(`users/${uid}/videos`).once('value').then((snapshot) => {
      const videos = [];
      //console.log('test',uid);
      snapshot.forEach((childSnapshot) => {
        videos.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setVideos(videos));
    });
  };
};  
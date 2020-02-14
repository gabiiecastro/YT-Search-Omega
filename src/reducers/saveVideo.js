const videoReducerDefaultState = [];

export default (state = videoReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_VIDEO':
      return [
        ...state,
        action.video
      ];
    case 'REMOVE_VIDEO':
      return state.filter(({ id }) => id !== action.id);
    case 'SET_VIDEOS': 
      return action.videos;  
    default:
      return state;
  }
};
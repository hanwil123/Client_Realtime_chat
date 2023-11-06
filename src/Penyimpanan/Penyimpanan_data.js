// redux/reducers.js
import { combineReducers } from 'redux';

const roomIdReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_ROOM_ID':
      return action.payload;
    default:
      return state;
  }  
};

const rootReducer = combineReducers({
  roomId: roomIdReducer,
});
export default rootReducer;
export const setRoomId = (roomId) => ({
    type: 'SET_ROOM_ID',
    payload: roomId,
  });
  

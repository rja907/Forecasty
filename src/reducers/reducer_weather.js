import { FETCH_WEATHER } from '../actions/index';
export default function (state = [], action ){
  switch (action.type) {
    case FETCH_WEATHER:
      //NEVER PUSH to manipulate state in REDUX or REACT!
      //return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }
  //console.log('Action Received', action);
  return state;
}

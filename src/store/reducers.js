import C from '../constants';
import { combineReducers } from 'redux';

export const decisions = (state=[], {type, payload}) => {
  switch (type) {
    case C.ADD_DECISION:
      return [...state, payload];
    case C.REMOVE_DECISION:
      return state.filter(decision => decision.id !== payload);
    default:
      return state;
  }
};

export default combineReducers({
  decisions,
});

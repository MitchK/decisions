import C from './constants'

export function addDecision(id, text, options) {
  return {
    type: C.ADD_DECISION,
    payload: {id, text, options},
  };
};

export function removeDecision(id) {
  return {
    type: C.REMOVE_DECISION,
    payload: id,
  };
};

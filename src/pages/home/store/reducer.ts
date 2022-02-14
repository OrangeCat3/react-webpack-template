import { Map } from 'immutable';

const defaultState = Map({
  accout: {},
  homeData: {}
});

interface Action {
  type: String,
  accout? : Object,
  homeData?: Object
}

export default function reducer(state = defaultState, action: Action) {
  switch(action.type) {
    case 'saveAccout':
      return state.set("accout", action.accout || {});
    case 'saveHome':
      return state.set("homeData", action.homeData || {});
    default:
      return state;

  }
}
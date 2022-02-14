import { combineReducers } from 'redux-immutable';

import { reducer as loginReducer } from '@pages/home/store'

export default combineReducers({
  login: loginReducer,
})
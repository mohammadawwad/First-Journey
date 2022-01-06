import { combineReducers } from 'redux';

import postsReducers from './postsReducers';
import authReducers from './authReducers';

export const reducers = combineReducers({ postsReducers, authReducers });

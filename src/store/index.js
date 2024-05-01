import React from 'react';
import {combineReducers,createStore} from 'redux'
import contacts from './reducer'

const allReducers = combineReducers({contacts});

export const store = createStore(allReducers)
import React from 'react'
import { SAVE_CONTACTS } from './constants';
import initialState from './state';

const contacts = (state = initialState, action) =>{
    switch(action.type) {
        case SAVE_CONTACTS : {
            return {
            ...state,
            contacts:[...action.payload],
            };
        }
        break;

        default: 
        return state;
    }
}

export default contacts;
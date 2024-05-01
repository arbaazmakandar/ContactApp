import React from 'react'
import { SAVE_CONTACTS } from './constants';


export const saveContacts = (data) =>{
    return {
        type: SAVE_CONTACTS,
        payload : data
    }
};